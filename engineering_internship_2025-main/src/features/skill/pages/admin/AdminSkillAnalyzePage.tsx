import { SkillAnalyzeDashboard } from "../../components/dashboard/SkillAnalyzeDashboard";
import Layout from "../../components/layout/Layout";

const AdminSkillAnalyzePage = () => {
    return (
        <Layout
            title="スキルデータ分析"
            explanation="社員のスキルデータを様々な角度から分析・可視化できます。"
        >
            <SkillAnalyzeDashboard />
        </Layout>
    );
};

export default AdminSkillAnalyzePage;
