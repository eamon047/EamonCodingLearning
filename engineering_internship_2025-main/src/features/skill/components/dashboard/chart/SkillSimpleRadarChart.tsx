import { FormControl, FormGroup, FormLabel, MenuItem, Select, Stack, Typography } from '@mui/material';
import { Unstable_RadarChart as RadarChart } from '@mui/x-charts';
import { useState } from 'react';
import { useEmployeeList } from '../../../api/useEmployeeList';
import { useSkillChartByEmpId } from '../../../api/useSkillChartByEmpId';

const MAX_RADAR_VALUE = 12; // レーダーチャートは12を最大値とする。それ以上は最大値に張り付く。

export const SkillSimpleRadarChart = () => {

  // 社員選択用
  const [empId, setEmpId] = useState<string>("");
  const { empList, isLoading, error } = useEmployeeList();

  // 結果の取得
  const { skillResultByCategory, isSkillResultByCategoryLoading, skillResultByCategoryError } = useSkillChartByEmpId(empId);

  if (error || skillResultByCategoryError) {
    return <div>エラーが発生しました</div>;
  }
  if (!empList || isLoading || isSkillResultByCategoryLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Stack gap={2} >
      <Typography variant="h6">
        社員のカテゴリ別レベル合計値
      </Typography>
      <FormControl>
        <FormLabel>
          対象社員
        </FormLabel>
        <FormGroup>
          <Select
            size="small"
            value={empId}
            onChange={e => {
              setEmpId(e.target.value);
            }}
            sx={{ width: 200 }}
          >
            <MenuItem value=""></MenuItem>
            {empList.map(emp => (
              <MenuItem value={emp.empId}>{emp.empName}</MenuItem>
            ))}
          </Select>
        </FormGroup>
      </FormControl>
      {skillResultByCategory ?
        <RadarChart
          height={300}
          series={[{
            label: empList.find(emp => emp.empId === Number(empId))?.empName || "",
            data: skillResultByCategory.map(result => Math.min(result.value, MAX_RADAR_VALUE))
          }]}
          radar={{
            max: MAX_RADAR_VALUE,
            metrics: skillResultByCategory.map(result => result.categoryName),
          }}
        />
        : <></>}
    </Stack>
  )
}
