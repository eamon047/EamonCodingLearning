import { http, HttpResponse } from "msw";
import { BASE_URL } from "../../features/skill/api";
import { skillMstData } from "../data/skillMst";

/**
 * skillMstのリストを取得するAPI
 * @returns SkillMstのリスト
 */
const get_skill_mst_list = http.get(
    `${BASE_URL}/skill-management/skill/list`,
    () => {
        // skillMstを全件取得する
        return HttpResponse.json(skillMstData);
    },
);

/**
 * skillMstのskillIdから取得するAPI
 * @returns SkillMst
 */
const get_skill_mst = http.get(
    `${BASE_URL}/skill-management/skill/:skillId`,
    (req) => {
        const skillId = req.params.skillId;
        // skillLevelMstを全件取得する
        return HttpResponse.json(
            skillMstData.find((skill) => skill.skillId === Number(skillId)),
        );
    },
);

export const skillMstHandler = [get_skill_mst_list, get_skill_mst];
