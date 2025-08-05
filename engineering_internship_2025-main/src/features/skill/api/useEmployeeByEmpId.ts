import useSWR from "swr";
import { fetcher } from ".";
import { Employee } from "../types";

/**
 * skillIdで指定したスキル情報を取得します。
 * @param skillId スキルID
 */
export const useEmployeeByEmpId = (empId: string | undefined) => {
    const { data, isLoading, error } = useSWR<Employee>(
        empId !== undefined ? `skill-management/employee/${empId}` : null,
        fetcher,
    );

    return {
        employee: data,
        isEmployeeLoading: isLoading,
        employeeError: error,
    };
};
