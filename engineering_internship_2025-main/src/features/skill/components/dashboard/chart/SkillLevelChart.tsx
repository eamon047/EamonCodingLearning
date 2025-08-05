import { FormControl, FormGroup, FormLabel, MenuItem, Select, Stack, Typography } from '@mui/material';
import { BarChart } from '@mui/x-charts';
import { useState } from 'react';
import { useSkillList } from '../../../api/useSkillList';
import { useSkillStatisticsBySkillId } from '../../../api/useSkillStatisticsBySkillId';



export const SkillLevelChart = () => {

  const [skillId, setSkillId] = useState<string>("");
  const { skills, isSkillsLoading, skillsError } = useSkillList();
  const { statistics, isStatisticsLoading, statisticsError } = useSkillStatisticsBySkillId(skillId);

  if (skillsError || statisticsError) {
    return <div>エラーが発生しました</div>;
  }
  if (!skills || isSkillsLoading || isStatisticsLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Stack gap={2}>
      <Typography variant="h6">
        スキルのレベル別人数分布
      </Typography>
      <FormControl>
        <FormLabel>
          対象スキル
        </FormLabel>
        <FormGroup>
          <Select
            size="small"
            value={skillId}
            onChange={e => {
              setSkillId(e.target.value);
            }}
            sx={{ width: 200 }}
          >
            <MenuItem value=""></MenuItem>
            {skills.map(skill => (
              <MenuItem value={skill.skillId}>{skill.name}</MenuItem>
            ))}
          </Select>
        </FormGroup>
      </FormControl>
      {statistics ?
        <BarChart
          dataset={statistics.map(({ skillLevelLabel, empCount }) => ({ skillLevelLabel, empCount }))}
          xAxis={[{ dataKey: 'skillLevelLabel' }]}
          series={[{
            dataKey: 'empCount',
            label: skills.find(skill => skill.skillId === Number(skillId))?.name || "",
          }]}
          yAxis={[{
            label: '人数 (人)',
            width: 32,
          }]}
          height={300}
        /> : <></>}

    </Stack>
  )
}
