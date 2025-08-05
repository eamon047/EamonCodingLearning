import useSWR from "swr";
import { fetcher } from ".";
import { StatisticsBySkill } from "../types";

export const useSkillStatisticsBySkillId = (skillId: string | undefined) => {
    const { data, isLoading, error } = useSWR<StatisticsBySkill[]>(
        skillId
            ? `skill-management/skill-result/result-by-skill?${new URLSearchParams(
                  {
                      skillId: skillId,
                  },
              ).toString()}`
            : null,
        fetcher,
    );

    return {
        statistics: data,
        isStatisticsLoading: isLoading,
        statisticsError: error,
    };
};
