
import { Card, FormControl, FormGroup, FormLabel, MenuItem, Select, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useSkillLevel } from "../../../skill/api/useSkillLevel";
import { useSkillLevelList } from "../../../skill/api/useSkillLevelList";
import { TRAINING_CARD_SX_STYLE } from "../../consts";

/**
 * オンボーディングワークのサンプル実装です。
 */
export const TrainingSample = () => {

  /**
   * Tips: 課題005 ToDo 10 で利用します。
   *   useStateはReactのフックの一つで、変化するデータを管理するために使用します。
   * 
   *   ここでは、Selectコンポーネントで選択されたスキルレベルのIDを管理するために使用しています。
   *   skillLevelIdが管理されているスキルレベルIDで、
   *   setSkillLevelIdはその値を更新するための関数です。
   */
  const [skillLevelId, setSkillLevelId] = useState<number>();

  // スキルの評価に利用するスキルレベルの一覧を取得しています。
  const { skillLevels, isSkillLevelsLoading, skillLevelsError } = useSkillLevelList();

  // 選択されたスキルレベルの詳細を取得
  const { skillLevel } = useSkillLevel(skillLevelId);

  // スキルレベルのリストがまだ取得できていない場合は、Loading...を表示
  if (isSkillLevelsLoading || skillLevels === undefined) {
    return <div>Loading...</div>;
  }
  // スキルレベルのリストの取得に失敗した場合は、エラーメッセージを表示
  if (skillLevelsError) {
    return <div>データの取得に失敗しました。</div>;
  }

  return (
    <Card sx={TRAINING_CARD_SX_STYLE}>
      <Typography variant="h6">
        オンボーディングワークのサンプル
      </Typography>

      <FormControl sx={{ width: "20%" }}>
        <FormLabel>スキルレベル</FormLabel>
        <FormGroup>
          <Select
            size="small"
            value={skillLevelId ?? ""} // 現在選択されているスキルレベルのIDをvalueに設定
            onChange={(e) => setSkillLevelId(e.target.value ? Number(e.target.value) : undefined)} // 選択肢が選択された時に、スキルレベルIDを更新
          >
            {/* スキルレベルの選択肢を表示 */}
            <MenuItem value=""></MenuItem>
            {skillLevels.map((skillLevel) => (
              <MenuItem value={skillLevel.skillLevelId}>
                {skillLevel.label}
              </MenuItem>
            ))}
          </Select>
        </FormGroup>
      </FormControl>

      {/* 選択されたスキルレベルの詳細を表示 */}
      <Stack padding={2} gap={2}>
        {skillLevel && (
          <>
            <Typography>
              選択されたスキルレベル : {skillLevel.label ?? "未選択"}
            </Typography>
            <Typography>
              説明 : {skillLevel.description ?? ""}
            </Typography>
          </>
        )}
      </Stack>
    </Card>
  );
}