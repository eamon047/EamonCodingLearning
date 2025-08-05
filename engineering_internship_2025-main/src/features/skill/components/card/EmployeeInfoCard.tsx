import { Card, CardContent, Typography } from "@mui/material";
import { useEmployeeByEmpId } from "../../api/useEmployeeByEmpId";

interface Props {
    empId: string | undefined;
}
export const EmployeeInfoCard = ({ empId }: Props) => {

    const { employee, isEmployeeLoading, employeeError } = useEmployeeByEmpId(empId);

    if (employee === undefined || isEmployeeLoading) {
        return <div>Loading...</div>;
    }

    if (employeeError) {
        return <div>エラーが発生しました: {employeeError.message}</div>;
    }

    return (
        <Card variant="outlined" sx={{ padding: 2, margin: 2, width: "30%" }}>
            <CardContent>
                <Typography variant="body1">
                    社員名称 　： {employee.empName}
                </Typography>
                <Typography variant="body1">
                    所属　　 　： {employee.department}
                </Typography>
                <Typography variant="body1">
                    職位　　 　： {employee.rank}
                </Typography>
                <Typography variant="body1">
                    事業所： {employee.office}
                </Typography>
                <Typography variant="body1">
                    入社年月日： {employee.hireDate}
                </Typography>
            </CardContent>
        </Card>
    );
};

