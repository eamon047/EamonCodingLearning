import useSWR from "swr";
import { fetcher } from ".";
import { EmployeeWithSkills } from "../types";

export const useEmployeePagingList = (
    pageNo: number,
    pageRows: number,
    keywords: string,
    skillId: string,
    skillLevelId: string,
    office: string  = "",
) => {
    const { data, isLoading, error } = useSWR<{
        employees: EmployeeWithSkills[];
        totalCount: number;
    }>(
        `skill-management/employee/search?${new URLSearchParams({
            pageNo: pageNo.toString(),
            pageRows: pageRows.toString(),
            keywords: keywords,
            skillId: skillId,
            skillLevelId: skillLevelId,
            office: office,
        }).toString()}`,
        fetcher,
    );

    return {
        employees: data?.employees,
        totalCount: data?.totalCount ?? 0,
        isLoading,
        error,
    };
};
