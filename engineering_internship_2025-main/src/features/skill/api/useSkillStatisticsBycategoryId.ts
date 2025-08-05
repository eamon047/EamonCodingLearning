import useSWR from "swr";
import { fetcher } from ".";

const useSkillStatisticsByCategoryId = (category_id: string | undefined) => {
    const { data, isLoading, error } = useSWR<{ empName: string }[]>(
        category_id
            ? `skill-management/skill-result/category/${category_id}`
            : null,
        fetcher,
    );

    return {
        statistics: data,
        isStatisticsLoading: isLoading,
        statisticsError: error,
    };
};

export default useSkillStatisticsByCategoryId;
