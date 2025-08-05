import Layout from "../../skill/components/layout/Layout";
import { CatchUpTrainings } from "../components/CatchUpTrainings";

/**
 * オンボーディング課題を表示するページです。
 */
const CatchUpTrainingPage = () => {
    return (
        <Layout
            title="オンボーディング課題"
            explanation="オンボーディングワークをこのページで行います。"
        >
            {/* この CatchUpTrainings のコンポーネント内に課題を実装する箇所があります。
                ctrl+click(Macではcmd+click)で CatchUpTrainings コンポーネントを開いてください。

                ※ctrl+click(Macではcmd+click)で開かない場合は、src/features/training/components/CatchUpTrainings.tsx ファイルを開いてください。
            */}
            <CatchUpTrainings />
        </Layout>
    );
};

export default CatchUpTrainingPage;
