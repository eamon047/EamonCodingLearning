import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import { SkillLevelChart } from "./chart/SkillLevelChart";
import { SkillSimpleRadarChart } from "./chart/SkillSimpleRadarChart";


export const SkillAnalyzeDashboard = () => {

  return (
    <Stack gap={2} padding={2}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 4 }} sx={{ minWidth: "400px" }}>
          <Card sx={{ height: "100%", width: "100%", margin: 0, padding: 0 }}>
            <CardContent>
              <SkillSimpleRadarChart
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }} sx={{ minWidth: "400px" }}>
          <Card sx={{ height: "100%", width: "100%" }}>
            <CardContent>
              <SkillLevelChart />
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }} sx={{ minWidth: "400px" }}>
          <Card sx={{ height: "100%", width: "100%", margin: 0, padding: 0 }}>
            <CardContent sx={{ alignItems: "center" }}>
              {/* 空のコンテンツ */}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  )
}

