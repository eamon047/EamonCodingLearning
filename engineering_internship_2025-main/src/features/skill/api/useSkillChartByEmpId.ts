import useSWR from "swr";
import { fetcher } from ".";

export const useSkillChartByEmpId = (empId: string | undefined) => {
    const { data, isLoading, error } = useSWR<
        {
            empId: number;
            categoryId: number;
            categoryName: string;
            value: number;
        }[]
    >(
        empId
            ? `skill-management/skill-result/category-result-by-empId?${new URLSearchParams(
                  {
                      empId: empId,
                  },
              ).toString()}`
            : null,
        fetcher,
    );

    return {
        skillResultByCategory: data,
        isSkillResultByCategoryLoading: isLoading,
        skillResultByCategoryError: error,
    };
};
