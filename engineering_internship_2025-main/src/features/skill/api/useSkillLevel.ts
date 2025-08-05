import useSWR from "swr";
import { fetcher } from ".";
import { SkillLevelMst } from "../types";

export const useSkillLevel = (skillLevelId: number | undefined) => {
    const { data, isLoading, error } = useSWR<SkillLevelMst>(
        skillLevelId !== undefined
            ? `skill-management/skill-level/${skillLevelId}`
            : null,
        fetcher,
    );

    return {
        skillLevel: data,
        isSkillLevelLoading: isLoading,
        skillLevelError: error,
    };
};
