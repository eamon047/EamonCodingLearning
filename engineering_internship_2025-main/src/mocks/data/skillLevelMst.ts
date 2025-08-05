import { SkillLevelMst } from "../../features/skill/types";

/**
 * 評価基準マスタデータです。
 * このデータは、評価基準のレベルを持っています。
 *
 * @typedef {Object} SkillLevelMst
 * @property {number} skillLevelId - スキルレベル(=評価基準)ID
 * @property {string} label - 評価ラベル
 * @property {number} value - 評価値
 * @property {string | undefined} description - 評価の説明
 */
export const skillLevelMstData: SkillLevelMst[] = [
    {
        skillLevelId: 1,
        label: "初級",
        value: 1,
        description:
            "基本的な知識はあるが、実務経験は浅い。標準的なタスクはある程度の指導下で完了可能。",
    },
    {
        skillLevelId: 2,
        label: "中級",
        value: 2,
        description:
            "通常のタスクを独力で、より複雑な問題にはある程度の指導が必要。",
    },
    {
        skillLevelId: 3,
        label: "上級",
        value: 3,
        description: "深い知識と実務経験を持ち、独立して複雑な問題解決が可能。",
    },
    {
        skillLevelId: 4,
        label: "専門",
        value: 4,
        description:
            "業界全体で認められる深い専門性を持ち、新しい手法や技術の開発が可能。",
    },
];
