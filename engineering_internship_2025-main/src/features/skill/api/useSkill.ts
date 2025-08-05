import useSWR from "swr";
import { fetcher } from ".";
import { SkillMst } from "../types";

/**
 * skillIdで指定したスキル情報を取得します。
 * @param skillId スキルID
 */
export const useSkill = (skillId: number | undefined) => {
    const { data, isLoading, error } = useSWR<SkillMst>(
        skillId !== undefined ? `skill-management/skill/${skillId}` : null,
        fetcher,
    );

    return {
        skill: data,
        isSkillLoading: isLoading,
        skillError: error,
    };
};
