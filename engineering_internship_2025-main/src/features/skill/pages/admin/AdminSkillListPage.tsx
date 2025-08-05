import Layout from "../../components/layout/Layout";
import { EmployeeList } from "../../components/list/EmployeeList";

export default function AdminSkillListPage() {
    return (
        <Layout
            title="スキルデータ検索"
            explanation="社員のスキルデータから条件に合う社員を検索できます。"
        >
            <EmployeeList></EmployeeList>
        </Layout>
    );
}
