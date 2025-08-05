import "normalize.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AdminSkillAnalyzePage from "./features/skill/pages/admin/AdminSkillAnalyzePage";
import AdminSkillDetailPage from "./features/skill/pages/admin/AdminSkillDetailPage";
import AdminSkillListPage from "./features/skill/pages/admin/AdminSkillListPage";
import CatchUpTrainingPage from "./features/training/pages/CatchUpTrainingPage";

function InnerApp() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <AdminSkillListPage />,
        },
        /* スキル管理機能用ページ */
        {
            path: "/admin/skill/list",
            element: <AdminSkillListPage />,
        },
        {
            path: "/admin/skill/detail/:empId",
            element: <AdminSkillDetailPage />,
        },
        {
            path: "/admin/skill/analyze",
            element: <AdminSkillAnalyzePage />,
        },
        /* 課題用ページ */
        {
            path: "/training/list",
            element: <CatchUpTrainingPage />,
        },
    ]);
    return <RouterProvider router={router} />;
}

export default function App() {
    return <InnerApp />;
}
