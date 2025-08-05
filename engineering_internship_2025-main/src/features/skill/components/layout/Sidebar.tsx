import { css } from "@emotion/react";
import { BarChart, Search } from "@mui/icons-material";
import TaskIcon from "@mui/icons-material/Task";
import { useNavigate } from "react-router-dom";
import SDSAnnotation from "./sds/SDSAnnotation";
import SDSButton from "./sds/SDSButton";
import SDSContainer from "./sds/SDSContainer";
import SDSHorizontalCenter from "./sds/SDSHorizontalCenter";
import SDSLabel from "./sds/SDSLabel";
import SDSPartition from "./sds/SDSPartition";
import SDSStack from "./sds/SDSStack";

const containerStyle = css({
    width: "285px",
    height: "100vh",
    boxSizing: "border-box",
    padding: "16px",
});

const innerStyle = css({
    display: "flex",
    flexDirection: "column",
    border: "1px solid black",
    borderRadius: "6px",
    backgroundColor: "#2e3031",
    height: "100%",
    boxSizing: "border-box",
});

const logWrapperStyle = css({
    flexShrink: 0,
    flexGrow: 0,
});

const menuWrapperStyle = css({
    flexShrink: 1,
    flexGrow: 1,
    overflow: "auto",
});

const annotationWrapperStyle = css({
    flexShrink: 0,
    flexGrow: 0,
});

const paddingSideStyle = css({
    paddingLeft: "16px",
    paddingRight: "16px",
});

const designToolsLinkStyle = css({
    "background": "linear-gradient(to right, #0d86b2, #178ab4, #0d86b2)",
    "&:active": {
        background: "linear-gradient(to right, #054359, #0c455a, #054359)",
    },
});

export default function Sidebar() {
    const navigate = useNavigate();
    return (
        <div css={containerStyle}>
            <div css={innerStyle}>
                <div css={logWrapperStyle}>
                    <SDSContainer>
                        <SDSHorizontalCenter>
                            <img
                                src="/public/logo_dark.png"
                                alt="App Logo"
                                style={{ width: "auto", height: "48px" }}
                            />
                        </SDSHorizontalCenter>
                    </SDSContainer>
                    <SDSPartition></SDSPartition>
                </div>
                <div css={menuWrapperStyle}>
                    <div css={paddingSideStyle}>
                        <SDSContainer>
                            <SDSStack>
                                <SDSLabel
                                    title="管理者"
                                    variant="dark"
                                ></SDSLabel>
                                <SDSButton
                                    title="スキルデータ検索"
                                    variant="dark"
                                    align="left"
                                    icon={<Search></Search>}
                                    onClick={() => {
                                        navigate("/admin/skill/list");
                                    }}
                                ></SDSButton>
                                <SDSButton
                                    title="スキルデータ分析"
                                    variant="dark"
                                    align="left"
                                    icon={<BarChart></BarChart>}
                                    onClick={() => {
                                        navigate("/admin/skill/analyze");
                                    }}
                                ></SDSButton>
                                <SDSLabel
                                    title="学習用"
                                    variant="dark"
                                ></SDSLabel>
                                <SDSButton
                                    title="キャッチアップ課題"
                                    variant="dark"
                                    align="left"
                                    icon={<TaskIcon />}
                                    onClick={() => {
                                        navigate("/training/list");
                                    }}
                                ></SDSButton>
                            </SDSStack>
                        </SDSContainer>
                    </div>
                </div>
                <div css={annotationWrapperStyle}>
                    <SDSPartition></SDSPartition>
                    <div css={paddingSideStyle}>
                        <SDSContainer>
                            <SDSAnnotation variant="dark" align="center">
                                stepsはインターンシップの教材として開発されたものであり、意図的に簡易的な実装や不備を含めています。
                                <br></br>
                            </SDSAnnotation>
                        </SDSContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}
