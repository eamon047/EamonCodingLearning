import useSWR from "swr";
import { fetcher } from ".";
import { SkillMst } from "../types";

/**
 * Tips:
 *   [useSWRでのデータ取得について]
 *     ここではuseSWRというライブラリを使って、APIからスキルのリストを取得リクエストを行っています。
 *     features/skill/apiの中にそれぞれuseXxx.tsというファイルがあり、各データに対してデータ取得を行う関数が用意されています。
 *
 *     このファイルでは、Skillに関するデータを取得するためのカスタムフックuseSkillListを定義しています。
 */

/**
 * スキルの一覧を取得するカスタムフックです。
 * @return {
 *  skills: SkillMst[] | undefined; // スキルの配列
 *  isSkillsLoading: boolean;       // データ取得がロード中かどうか
 *  skillsError: any;
 * }
 */
export const useSkillList = () => {
    const { data, isLoading, error } = useSWR<SkillMst[]>(
        `skill-management/skill/list`, // APIのエンドポイントを指定します、このURLが実際にデータをリクエストするURLです
        fetcher, // fetcherは今回は触れません、useSWR<取得するデータの型>(URL, fetcher)の形でデータを取得するものだと理解してください。
    );

    return {
        skills: data, // スキルの配列を返します、ロード中はundefinedが返ります
        isSkillsLoading: isLoading, // データ取得がロード中かどうかをbooleanで返します
        skillsError: error, // 取得エラーが発生した場合はエラーが返ります、エラーがない場合はundefinedが返ります
    };
};
