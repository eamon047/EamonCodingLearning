import { http, HttpResponse } from "msw";
import { BASE_URL } from "../../features/skill/api";
import { skillLevelMstData } from "../data/skillLevelMst";

/**
 * skillLevelMstのリストを取得するAPI
 * @returns SkillLevelMstのリスト
 */
const get_skill_level_mst_list = http.get(
    `${BASE_URL}/skill-management/skill-level/list`,
    () => {
        // skillLevelMstを全件取得する
        return HttpResponse.json(skillLevelMstData);
    },
);

/**
 * skillLevelMstのskillLevelIdから取得するAPI
 * @returns SkillLevelMst
 */
const get_skill_level_mst = http.get(
    `${BASE_URL}/skill-management/skill-level/:skillLevelId`,
    (req) => {
        const skillLevelId = req.params.skillLevelId;
        // skillLevelMstを全件取得する
        return HttpResponse.json(
            skillLevelMstData.find(
                (skillLevel) =>
                    skillLevel.skillLevelId === Number(skillLevelId),
            ),
        );
    },
);

export const skillLevelMstHandler = [
    get_skill_level_mst_list,
    get_skill_level_mst,
];
