import { AssessmentYear } from "../../features/skill/types";

/**
 * スキル結果の入力年度データです。
 * このデータは、スキル結果の入力年度を持っています。
 *
 * @typedef {Object} AssessmentYear
 * @property {number} assessmentYearId - スキル入力年度ID
 * @property {string} year - スキル入力年度
 */
export const assessmentYearData: AssessmentYear[] = [
    {
        assessmentYearId: 1,
        year: "2023",
    },
    {
        assessmentYearId: 2,
        year: "2024",
    },
    {
        assessmentYearId: 3,
        year: "2025",
    },
];
