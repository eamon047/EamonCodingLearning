import { http, HttpResponse } from "msw";
import { BASE_URL } from "../../features/skill/api";
import { SkillResultByCategory } from "../../features/skill/types";
import { skillLevelMstData } from "../data/skillLevelMst";
import { skillMstData } from "../data/skillMst";
import { skillResultData } from "../data/skillResult";
import { categoryMstData } from "../data/categoryMst";
import { DEFAULT_ASSESSMENT_YEAR } from "../../features/skill/consts";

/**
 * employeeIdと入力年度からその人のスキル入力結果のリストを取得するAPI
 * @param employeeId 社員ID
 * @param assessmentYear 入力年度
 * @returns スキル入力結果のリスト
 */
const get_skill_result_by_employee_id_and_assessment_year = http.get(
    `${BASE_URL}/skill-management/skill-result/list-by-employee-id-and-assessment-year`,
    ({ request }) => {
        // クエリパラメータからemployeeIdとassessmentYearを取得する
        const url = new URL(request.url);
        const employeeId = url.searchParams.get("employeeId");
        const assessmentYear = url.searchParams.get("assessmentYear");

        // 有効なemployeeIdとassessmentYearが指定されていない場合は400エラーを返す
        if (!employeeId || !assessmentYear || isNaN(Number(employeeId))) {
            return HttpResponse.json(
                {
                    error: "both employeeId and assessmentYear are required",
                },
                {
                    status: 400,
                },
            );
        }
        // employeeIdとassessmentYearからスキル入力結果を取得する
        const result = skillResultData.filter(
            (skillResult) =>
                skillResult.fkEmployeeId === Number(employeeId) &&
                skillResult.assessmentYear === assessmentYear,
        );
        return HttpResponse.json(result);
    },
);

/**
 * 社員IDからカテゴリ単位でスキル結果を取得するAPI
 * @param empId 社員ID
 */
const get_category_result_by_emp_id = http.get(
    `${BASE_URL}/skill-management/skill-result/category-result-by-empId`,
    ({ request }) => {
        // クエリパラメータからemployeeIdを取得する
        const url = new URL(request.url);
        const employeeId = Number(url.searchParams.get("empId"));
        // 有効なemployeeIdが指定されていない場合は400エラーを返す
        if (!employeeId || isNaN(employeeId)) {
            return HttpResponse.json(
                {
                    error: "employeeId is required",
                },
                {
                    status: 400,
                },
            );
        }

        const groupedResult: SkillResultByCategory[] = categoryMstData.map(categoryMst => {
            const skillResults = skillResultData.filter(skillResult => {
                if (skillResult.fkEmployeeId !== employeeId) return false;
                if (skillResult.assessmentYear !== DEFAULT_ASSESSMENT_YEAR) return false;

                const skillMst = skillMstData.find(
                    skillMst => skillMst.skillId === skillResult.fkSkillId,
                );
                return skillMst?.fkCategoryId === categoryMst.categoryId;
            });

            let totalValue = 0;
            skillResults.forEach(skillResult =>
                totalValue += skillResult.evaValue
            );

            return {
                empId: employeeId,
                categoryId: categoryMst.categoryId,
                categoryName: categoryMst.name,
                value: totalValue,
            };
        });

        return HttpResponse.json(groupedResult);
    },
);

const get_skill_statistics_by_skill_id = http.get(
    `${BASE_URL}/skill-management/skill-result/result-by-skill`,
    ({ request }) => {
        // クエリパラメータからskillIdを取得する
        const url = new URL(request.url);
        const skillId = Number(url.searchParams.get("skillId"));
        // 有効なskillIdが指定されていない場合は400エラーを返す
        if (!skillId || isNaN(skillId)) {
            return HttpResponse.json(
                {
                    error: "skillId is required",
                },
                {
                    status: 400,
                },
            );
        }
        const targetSkill = skillMstData.find(
            (skill) => skill.skillId === skillId,
        );
        if (!targetSkill) {
            return HttpResponse.json(
                {
                    error: "skillId is not found",
                },
                {
                    status: 404,
                },
            );
        }
        const targetResult = skillResultData.filter(
            (result) =>
                result.fkSkillId === skillId &&
                result.assessmentYear === DEFAULT_ASSESSMENT_YEAR,
        );
        const result = skillLevelMstData.map((level) => {
            const count = targetResult.filter(
                (result) => result.fkSkillLevelId === level.skillLevelId,
            ).length;
            return {
                skillId: targetSkill.skillId,
                skillName: targetSkill.name,
                skillLevelId: level.skillLevelId,
                skillLevelLabel: level.label,
                skillLevelDescription: level.description,
                empCount: count,
            };
        });
        return HttpResponse.json(result);
    },
);

export const skillResultHandler = [
    get_skill_result_by_employee_id_and_assessment_year,
    get_category_result_by_emp_id,
    get_skill_statistics_by_skill_id,
];
