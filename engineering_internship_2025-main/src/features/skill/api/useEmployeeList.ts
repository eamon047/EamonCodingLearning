import useSWR from "swr";
import { fetcher } from ".";
import { Employee } from "../types";

export const useEmployeeList = () => {
    const { data, isLoading, error } = useSWR<Employee[]>(
        `skill-management/employee/list`,
        fetcher,
    );

    return { empList: data, isLoading, error };
};
