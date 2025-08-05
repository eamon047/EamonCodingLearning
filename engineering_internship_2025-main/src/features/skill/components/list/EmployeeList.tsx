import { Stack } from "@mui/material";
import { useState } from "react";
import { useEmployeePagingList } from "../../api/useEmployeePagingList";
import { PaginationParts } from "../common/Pagination";
import { EmployeeFilter } from "../filter/EmployeeFilter";
import { EmployeeListContent } from "./EmployeeListContent";

export const EmployeeList = () => {
    // ページング用
    const [pageNo, setPageNo] = useState<number>(1);
    const [pageRows] = useState<number>(10);

    // 検索条件
    const [searchWord, setSearchWord] = useState<string>("");
    const [skillId, setSkillId] = useState<string>("");
    const [skillLevelId, setSkillLevelId] = useState<string>("");

    // リスト取得
    const { employees, totalCount, error } = useEmployeePagingList(
        pageNo,
        pageRows,
        searchWord,
        skillId,
        skillLevelId,
    );

    if (error) return <div>{error.message}</div>;
    if (!employees) return <div>Loading...</div>;

    return (
        <Stack direction="row" gap={4} height="100%" minHeight="500px">
            <Stack width="75%">
                <EmployeeListContent employees={employees} />
                <PaginationParts
                    pageNo={pageNo}
                    listSize={pageRows}
                    totalCount={totalCount}
                    setPageNo={setPageNo}
                />
            </Stack>
            <EmployeeFilter
                searchWord={searchWord}
                setSearchWord={setSearchWord}
                skillId={skillId}
                setSkillId={setSkillId}
                skillLevelId={skillLevelId}
                setSkillLevelId={setSkillLevelId}
            />
        </Stack>
    );
};
