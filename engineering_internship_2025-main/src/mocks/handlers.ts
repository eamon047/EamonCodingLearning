import { assessmentYearHandler } from "./handlers/assessmentYearHandler";
import { categoryMstHandler } from "./handlers/categoryMstHandler";
import { employeeHandler } from "./handlers/employeeHandler";
import { skillLevelMstHandler } from "./handlers/skillLevelMstHandler";
import { skillMstHandler } from "./handlers/skillMstHandler";
import { skillResultHandler } from "./handlers/skillResultHandler";

export const handlers = [
    // アセスメント入力年度に関するAPI
    ...assessmentYearHandler,

    // 大分類データに関するAPI
    ...categoryMstHandler,

    // 社員データに関するAPI
    ...employeeHandler,

    // スキルレベルデータに関するAPI
    ...skillLevelMstHandler,

    // スキルデータに関するAPI
    ...skillMstHandler,

    // スキル結果データに関するAPI
    ...skillResultHandler,
];
