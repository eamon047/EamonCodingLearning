import useSWR from "swr";
import { fetcher } from "."; // 既存のfetcherを使う
import { AssessmentYear } from "../types"; // 型をインポート

export const useAssessmentYearList = () => {
  const { data, isLoading, error } = useSWR<AssessmentYear[]>(
    `skill-management/assessment-year/list`, // ✅ APIのエンドポイント
    fetcher,
  );

  return {
    assessmentYears: data,                // 年度リスト
    isAssessmentYearsLoading: isLoading,  // ロード中判定
    assessmentYearsError: error,          // エラー
  };
};
