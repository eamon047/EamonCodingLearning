import { Pagination, PaginationItem, Stack, Typography } from "@mui/material";
import { useMemo } from "react";

interface Props {
  pageNo: number;
  totalCount: number;
  listSize: number;
  setPageNo: (value: number) => void;
}

/**
 * リストのページネーションを行うための共通コンポーネント
 */
export const PaginationParts = ({ pageNo, totalCount, listSize, setPageNo }: Props) => {

  const pagingCount: {
    pageCount: number;
    startNumber: number;
    endNumber: number;
    totalCount: number;
  } = useMemo(() => {
    const last = pageNo * listSize;
    return {
      pageCount: Math.ceil(totalCount / listSize),
      startNumber: (pageNo - 1) * listSize + 1,
      endNumber: last < totalCount ? last : totalCount,
      totalCount: totalCount,
    };
  }, [listSize, pageNo, totalCount]);

  return (
    <Stack px={2} pt={2} direction="row" alignItems="center" justifyContent="flex-end">
      <Typography>
        {`${pagingCount.startNumber}~${pagingCount.endNumber} of ${pagingCount.totalCount}`}
      </Typography>
      <Pagination
        count={pagingCount.pageCount}
        page={pageNo}
        renderItem={item => (
          <PaginationItem
            {...item}
            sx={
              item.type === 'page' ? { display: 'none' } : {}
            }
          />
        )}
        siblingCount={pagingCount.pageCount}
        boundaryCount={0}
        onChange={(_, page) => {
          setPageNo(page);
        }}
      />
    </Stack>
  )
}
