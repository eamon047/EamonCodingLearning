import useSWR, { mutate } from "swr";
import { fetcher } from ".";
import { SkillResultTree } from "../types";

export const useSkillResultTree = (empId: string | undefined) => {
    // TODO : server側の実装
    
    const { data, isLoading, error, mutate } = useSWR<SkillResultTree[]>(
        empId
            ? `skill-management/employee/${empId}/skills/list`
            : null,
        fetcher,
    );
    
    return {
        skillResultTree: data,
        isSkillResultTreeLoading: isLoading,
        skillResultTreeError: error,
        mutateSkillResultTree: mutate,
    };
};