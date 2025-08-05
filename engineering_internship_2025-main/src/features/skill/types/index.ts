/**
 * データベースの型定義
 */

// アセスメント入力年度
export interface AssessmentYear {
    assessmentYearId: number;
    year: string;
}

// 大分類マスタ
export interface CategoryMst {
    categoryId: number;
    name: string;
}

// スキルマスタ
export interface SkillMst {
    skillId: number;
    fkCategoryId: number;
    name: string;
    description: string | undefined;
}

// スキルレベルマスタ
export interface SkillLevelMst {
    skillLevelId: number;
    label: string;
    value: number;
    description: string | undefined;
}

// 社員
export interface Employee {
    empId: number;
    empName: string;
    hireDate: string;
    birthDate: string;
    department: string;
    office: string;
    rank: string;
    entryYear?: number;
}

// スキル結果
export interface SkillResult {
    skillResultId: number;
    fkEmployeeId: number;
    fkSkillId: number;
    fkSkillLevelId: number;
    evaValue: number;
    assessmentYear: string;
}

// スキル結果の入力年度
export interface AssessmentYear {
    assessmentYearId: number;
    year: string;
}

/**
 * 画面で利用する形に加工した型定義
 */

// スキル情報を含む社員情報
export interface EmployeeWithSkills {
    empId: number;
    empName: string;
    hireDate: string;
    department: string;
    office: string;
    rank: string;
    skills: string;
    entryYear?: number;
}

// チャートに表示するためのカテゴリごとのスキル結果情報
export interface SkillResultByCategory {
    empId: number;
    categoryId: number;
    categoryName: string;
    value: number;
}

// スキル単位のスキル保持率
export interface StatisticsBySkill {
    skillId: number;
    skillName: string;
    skillLevelId: number;
    skillLevelLabel: string;
    skillLevelDescription: string;
    empCount: number;
}

// 明細画面に表示するスキル情報
export interface SkillResultTree {
    categoryId: number;
    categoryName: string;
    skillId: number;
    skillName: string;
    skillDescription: string | undefined;
    skillResultId: number | undefined;
    skillEvaId: number | undefined;
    evaValue: number | undefined;
}
