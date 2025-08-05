import { MenuItem, Paper, Select, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useSkillLevelList } from "../../api/useSkillLevelList";
import { deleteSkillResult, saveSkillResult, updateSkillResult } from "../../api/useSkillResult";
import { useSkillResultTree } from "../../api/useSkillResultTree";
import { SkillResultTree } from "../../types";

interface Props {
  empId: string | undefined
}


export const SkillDetailForm = ({ empId }: Props) => {

  // データ取得
  // todo: employeeの取得
  const { skillLevels, isSkillLevelsLoading, skillLevelsError } = useSkillLevelList();
  const { skillResultTree, isSkillResultTreeLoading, skillResultTreeError, mutateSkillResultTree } = useSkillResultTree(empId);


  // saveSkillResult
  const handleUpdateSkillResult = async (skill: SkillResultTree, skillEvaId: number | undefined) => {
    // todo : swrのmutateとsave処理
    // mutate
    if (!skillEvaId) {
      if (skill.skillResultId) {
        // 値が削除されたらskillResultから削除
        await deleteSkillResult(skill.skillResultId);
      }
      // 元々skillResultがなければ何もしない
      return;
    }
    if (skill.skillResultId) {
      // skillResultがある場合は更新
      await updateSkillResult({
        empId: Number(empId),
        skillId: skill.skillId,
        skillEvaId: skillEvaId,
      });
    } else {
      // skillResultがない場合は新規作成
      await saveSkillResult({
        empId: Number(empId),
        skillId: skill.skillId,
        skillEvaId: skillEvaId,
      });
    }
    // スキル一覧を更新
    mutateSkillResultTree();
  }

  if (!empId || Number.isNaN(Number(empId))) {
    return <div>empId is not found or empId is invalid</div>
  }

  if (skillResultTreeError || skillLevelsError) {
    return <div>エラーが発生しました</div>;
  }

  if (isSkillResultTreeLoading || isSkillLevelsLoading) {
    return <div>Loading...</div>;
  }

  if (!skillResultTree || !skillLevels) {
    return <div>Loading...</div>;
  }

  return (
    <Stack>
      <TableContainer component={Paper} sx={{ width: "80%" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell width="20%">
                カテゴリ
              </TableCell>
              <TableCell width="30%">
                スキル
              </TableCell>
              <TableCell width="30%">
                詳細
              </TableCell>
              <TableCell width="20%">
                レベル
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {skillResultTree.map((skillResultTreeItem, index) => (
              <TableRow key={index}>
                <TableCell>
                  {skillResultTreeItem.categoryName}
                </TableCell>
                <TableCell>
                  {skillResultTreeItem.skillName}
                </TableCell>
                <TableCell>
                  {skillResultTreeItem.skillDescription}
                </TableCell>
                <TableCell>
                  {skillLevels.find(skillLevel => skillLevel.skillLevelId === skillResultTreeItem.skillEvaId)?.label || "未設定"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  )
}

