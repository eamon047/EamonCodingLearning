import { Card, FormControl, FormGroup, FormLabel, MenuItem, Select, Stack, Typography } from "@mui/material";
import { useSkill } from "../../../skill/api/useSkill";
import { useState } from "react";
import { TRAINING_CARD_SX_STYLE } from "../../consts";
import { useSkillList } from "../../../skill/api/useSkillList";

/**
 * オンボーディングワーク005を行うコンポーネントです。
 */
export const Training005 = () => {

  /**
   * TODO 8 : implement me !!
   * 
   * [実装手順]
   * 1. ここでは、useSkillListというカスタムフックを使って、スキルのリストを取得します。
   *    [useSWRでのデータ取得]
   *      src/features/skill/api/useSkillList.tsのファイルを開いてください。
   *      ここにuseSkillListという関数が定義されています。
   *      この関数を利用して、スキルのリストを取得します。
   *      const { skills, isSkillsLoading, skillsError } = useSkillList(); と実装してみてください。
   * 
   * 2. 取得したデータを画面に表示します。
   *    return以下の{ TODO 8 : implement me !! }の箇所にTypographyコンポーネントを作成して、
   *    中に{skills?.toString() ?? ""}と記載し、画面に表示してください。
   *    [object Object],[object Object]...のように表示されていれば意図通りです。それぞれがSkillMstのオブジェクトになっています。
   * 
   */

  // TODO 8 : implement me !!
  const { skills, isSkillsLoading, skillsError } = useSkillList();

  // TODO 11 : implement me !!
  const [skillId, setSkillId] = useState<number>(); // ここをuseStateを使って、Selectコンポーネントで選択されたスキルのIDを管理するように変更してください。
  const { skill } = useSkill(skillId);


  /**
   * TODO 10 : implement me !!
   * 
   * [実装手順]
   * 1. 以下のif文をコメントアウトの外に記載します。
   *    以下のコードは、スキルのリストが取得できていない場合は、Loading...を画面に表示し、データ取得エラーが発生したらエラーを伝えるメッセージを表示しています。
  
   if (isSkillsLoading || skills === undefined) {
     return <div>Loading...</div>;
   }
   if (skillsError) {
    return <div>データの取得に失敗しました。</div>;
   }
  
   * 
   * 2. return以下の{ TODO 10 : implement me !! }の箇所にSelectコンポーネントの実装を行い、画面に表示されるようにしてください。
   */

  if (isSkillsLoading || skills === undefined) {
     return <div>Loading...</div>;
   }
   if (skillsError) {
    return <div>データの取得に失敗しました。</div>;
   } 

  return (
    <Card sx={TRAINING_CARD_SX_STYLE}>
      <Typography variant="h6">
        オンボーディングワーク005
      </Typography>
      {/* TODO 8 : implement me !! */}
      <Typography>
        {skills?.toString() ?? ""}
      </Typography>
      
      {/* TODO 10 : implement me !! */}
      <FormControl sx={{ width: "20%" }}>
        <FormLabel>スキル</FormLabel>
        <FormGroup>
          <Select
            size="small"
            value={skillId ?? ""} // 現在選択されているスキルレベルのIDをvalueに設定
            onChange={(e) => 
              setSkillId(e.target.value ? Number(e.target.value) : undefined)
            } // 選択肢が選択された時に、スキルレベルIDを更新
          >
            {/* スキルレベルの選択肢を表示 */}
            <MenuItem value=""></MenuItem>
            {skills?.map((skill) => (
              <MenuItem key={skill.skillId} value={skill.skillId}>
                {skill.name}
              </MenuItem>
            ))}
          </Select>
        </FormGroup>
      </FormControl>



      {/* 選択されたスキルの詳細を表示 */}
      <Stack padding={2} gap={2}>
        {skill && (
          <>
            <Typography>
              選択されたスキルレベル : {skill.name ?? "未選択"}
            </Typography>
            <Typography>
              説明 : {skill.description ?? ""}
            </Typography>
          </>
        )}

      </Stack>
    </Card>
  );
}



/**
 * ヒント
 * 
 * [useStateについて]
 * useStateは、Reactのフックの一つで、変化するデータを管理する目的などに使用します。
 * src/features/training/components/trainings/TrainingSample.tsxに使い方を記載しています。
 * 
 * 詳しくは、Reactの公式ドキュメントを参照してください。
 * https://ja.react.dev/reference/react/useState
 */
