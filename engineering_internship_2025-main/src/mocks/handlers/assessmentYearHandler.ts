import { http, HttpResponse } from "msw";
import { BASE_URL } from "../../features/skill/api";

/**
 * assessmentYearのリストを取得するAPI
 * @returns AssessmentYearのリスト
 */
const get_assessment_year_list = http.get(
    `${BASE_URL}/skill-management/assessment-year/list`,
    () => {
        // TODO 14 : implement me !!
        return HttpResponse.json(undefined);
    },
);

export const assessmentYearHandler = [get_assessment_year_list];
