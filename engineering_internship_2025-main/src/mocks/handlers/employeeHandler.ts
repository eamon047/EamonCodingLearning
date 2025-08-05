import { http, HttpResponse } from "msw";
import { BASE_URL } from "../../features/skill/api";
import { DEFAULT_ASSESSMENT_YEAR } from "../../features/skill/consts";
import {
    EmployeeWithSkills,
    SkillResultTree,
} from "../../features/skill/types";
import { categoryMstData } from "../data/categoryMst";
import { employeeData } from "../data/employee";
import { skillLevelMstData } from "../data/skillLevelMst";
import { skillMstData } from "../data/skillMst";
import { skillResultData } from "../data/skillResult";

/**
 * employeeのリストを取得するAPI
 * @returns Employeeのリスト
 */
const get_employee_list = http.get(
    `${BASE_URL}/skill-management/employee/list`,
    () => {
        // employeeを全件取得する
        return HttpResponse.json(employeeData);
    },
);

/**
 * 社員ID (empId) からスキルの一覧を取得する
 */
const get_emp_skills = http.get(
    `${BASE_URL}/skill-management/employee/:empId/skills/list`,
    (req) => {
        const empId = req.params.empId;
        const filtered = skillResultData.filter(
            (data) =>
                data.fkEmployeeId === Number(empId) &&
                data.assessmentYear === DEFAULT_ASSESSMENT_YEAR,
        );
        const results: Array<SkillResultTree> = filtered.map((skillResult) => {
            const skill = skillMstData.find(
                (data) => data.skillId === skillResult.fkSkillId,
            );
            const category = categoryMstData.find(
                (data) => data.categoryId === skill?.fkCategoryId,
            );

            return {
                categoryId: skill?.fkCategoryId || 0,
                categoryName: category?.name || "",
                skillId: skillResult.fkSkillId,
                skillName: skill?.name || "",
                skillDescription: skill?.description,
                skillResultId: skillResult.skillResultId,
                skillEvaId: skillResult.fkSkillLevelId,
                evaValue: skillResult.evaValue,
            };
        });
        const sorted = results.sort((a, b) => {
            if (a.categoryId !== b.categoryId) {
                return a.categoryId - b.categoryId;
            }
            return a.skillId - b.skillId;
        });
        return HttpResponse.json(sorted);
    },
);

/**
 * スキルデータ検索画面用にスキルと社員一覧をページ単位で取得するAPI
 * @param pageNo ページ番号
 * @param pageRows 1ページあたりの行数
 * @param searchWord 検索ワード
 * @param skillId スキルID
 * @param skillLevelId スキルレベルID
 * @returns スキル情報付きの社員の一覧（EmployeeWithSkills[]）と検索結果の総件数
 */
const get_employee_skill_search_paging_list = http.get(
    `${BASE_URL}/skill-management/employee/search`,
    ({ request }) => {
        // クエリパラメータからページ番号、1ページあたりの行数、検索ワード、スキルID、スキルレベルIDを取得する
        const url = new URL(request.url);
        const pageNo = Number(url.searchParams.get("pageNo"));
        const pageRows = Number(url.searchParams.get("pageRows"));
        const searchWord = url.searchParams.get("keywords");
        const skillId = url.searchParams.get("skillId");
        const skillLevelId = url.searchParams.get("skillLevelId");
        const officeFilter = url.searchParams.get("office");

        // ページ番号と1ページあたりの行数が指定されていない場合は400エラーを返す
        if (!pageNo || !pageRows) {
            return HttpResponse.json(
                {
                    error: "pageNo and pageRows are required",
                },
                { status: 400 },
            );
        }

        // 社員ごとにスキルをスペース区切りで結合する
        const employees: Array<EmployeeWithSkills> = employeeData.map((emp) => {
            return {
                empId: emp.empId,
                empName: emp.empName,
                hireDate: emp.hireDate,
                birthDate: emp.birthDate,
                department: emp.department,
                office: emp.office,
                rank: emp.rank,
                entryYear: new Date(emp.hireDate).getFullYear(),
                skills: skillResultData
                    .filter(
                        (skill) =>
                            skill.fkEmployeeId === emp.empId &&
                            skill.assessmentYear === DEFAULT_ASSESSMENT_YEAR,
                    )
                    .map((skill) => {
                        const skillName = skillMstData.find(
                            (mst) => mst.skillId === skill.fkSkillId,
                        )?.name;
                        const skillLevelLabel = skillLevelMstData.find(
                            (mst) => mst.skillLevelId === skill.fkSkillLevelId,
                        )?.label;
                        return `${skillName}: ${skillLevelLabel}`;
                    })
                    .join(", "),
            };
        });

        // 検索条件を適用
        const filtered = employees.filter((emp) => {
            const skillResults = skillResultData.filter((data) => {
                return (
                    data.fkEmployeeId === emp.empId &&
                    data.assessmentYear === DEFAULT_ASSESSMENT_YEAR
                );
            });

            if (officeFilter && emp.office !== officeFilter) {
                return false;
            }

            // スキルでフィルタリング
            if (skillId) {
                const filteredBySkill = skillResults.filter((skillResult) => {
                    // スキルレベルまで指定がある場合は、指定スキルレベル以上を持っていたらtrue
                    if (skillLevelId) {
                        return (
                            skillResult.fkSkillId === Number(skillId) &&
                            skillResult.fkSkillLevelId >= Number(skillLevelId)
                        );
                    }
                    // スキルIDのみ指定がある場合は、指定スキルIDを持っていたらtrue
                    return skillResult.fkSkillId === Number(skillId);
                });
                if (filteredBySkill.length === 0) return false;
            }

            // キーワードでフィルタリング
            if (searchWord) {
                const keywords = searchWord.split(/[\u0020\u3000]+/); // 半角スペースと全角スペースでキーワードを分割
                let isMatch = true; // キーワードにマッチするかどうかのフラグ
                keywords.forEach((keyword) => {
                    const keywordLowerCase = keyword.toLowerCase(); // 大文字・小文字を区別しないため小文字に変換
                    if (
                        !emp.empId.toString().includes(keywordLowerCase) &&
                        !emp.empName.toLowerCase().includes(keywordLowerCase) &&
                        !emp.department.toLowerCase().includes(keywordLowerCase)
                    ) {
                        isMatch = false;
                    }
                });
                if (!isMatch) return false;
            }

            return true;
        });

        // ページング処理
        const start = (pageNo - 1) * pageRows;
        const end = start + pageRows;
        const paginatedResult = filtered.slice(start, end);

        return HttpResponse.json({
            employees: paginatedResult,
            totalCount: filtered.length,
        });
    },
);

/**
 * empIdからemployeeを取得
 * @returns Employee
 */
const get_employee_by_emp_id = http.get(
    `${BASE_URL}/skill-management/employee/:empId`,
    (req) => {
        const empId = req.params.empId;
        // employeeを取得する
        return HttpResponse.json(
            employeeData.find((employee) => employee.empId === Number(empId)),
        );
    },
);

export const employeeHandler = [
    get_employee_list,
    get_employee_skill_search_paging_list,
    get_emp_skills,
    get_employee_by_emp_id,
];
