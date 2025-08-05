import { http, HttpResponse } from "msw";
import { BASE_URL } from "../../features/skill/api";
import { categoryMstData } from "../data/categoryMst";

/**
 * categoryMstのリストを取得するAPI
 * @returns CategoryMstのリスト
 */
const get_category_mst_list = http.get(
    `${BASE_URL}/skill-management/category/list`,
    () => {
        // categoryMstを全件取得する
        return HttpResponse.json(categoryMstData);
    },
);

export const categoryMstHandler = [get_category_mst_list];
