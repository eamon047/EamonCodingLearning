import useSWR from "swr";
import { fetcher } from ".";
import { SkillLevelMst } from "../types";

export const useSkillLevelList = () => {
    const { data, isLoading, error } = useSWR<SkillLevelMst[]>(
        `skill-management/skill-level/list`,
        fetcher,
    );

    return {
        skillLevels: data,
        isSkillLevelsLoading: isLoading,
        skillLevelsError: error,
    };
};
