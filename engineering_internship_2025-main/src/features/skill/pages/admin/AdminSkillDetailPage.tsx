import { useParams } from "react-router-dom";
import { SkillDetailForm } from "../../components/form/SkillDetailForm";
import Layout from "../../components/layout/Layout";
import { EmployeeInfoCard } from "../../components/card/EmployeeInfoCard";

const AdminSkillDetailPage = () => {
    const { empId } = useParams();

    return (
        <Layout
            title="スキルデータ詳細"
            explanation="選択した社員が入力したスキルデータを確認できます。"
        >
            <EmployeeInfoCard empId={empId} />
            <SkillDetailForm empId={empId}></SkillDetailForm>
        </Layout>
    );
};

export default AdminSkillDetailPage;
