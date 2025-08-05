import { CategoryMst } from "../../features/skill/types";

/**
 * カテゴリマスタデータです。
 * このデータは、スキルのカテゴリーを持っています。
 *
 * @typedef {Object} CategoryMst
 * @property {number} categoryId - カテゴリID
 * @property {string} name - カテゴリ名称
 */
export const categoryMstData: CategoryMst[] = [
    {
        categoryId: 1,
        name: "要件定義",
    },
    {
        categoryId: 2,
        name: "システム設計",
    },
    {
        categoryId: 3,
        name: "コーディング",
    },
    {
        categoryId: 4,
        name: "テスト",
    },
    {
        categoryId: 5,
        name: "運用・保守",
    },
    {
        categoryId: 6,
        name: "一般",
    },
];
