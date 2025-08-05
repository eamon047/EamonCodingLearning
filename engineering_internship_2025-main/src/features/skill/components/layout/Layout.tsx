import { css } from "@emotion/react";
import { Stack, Typography } from "@mui/material";
import { PropsWithChildren } from "react";
import Sidebar from "./Sidebar";

const containerStyle = css({
    boxSizing: "border-box",
    display: "flex",
    alignItems: "flex-start",
});

const sidebarWrapperStyle = css({
    flexShrink: 0,
    flexGrow: 0,
    position: "sticky",
    top: 0,
    left: 0,
    zIndex: "100",
});

export type Props = {
    title: string;
    explanation: string;
} & PropsWithChildren;

export default function Layout({ title, explanation, children }: Props) {
    return (
        <div css={containerStyle}>
            <div css={sidebarWrapperStyle}>
                <Sidebar></Sidebar>
            </div>
            <Stack py={5} px={5} flex={1} gap={3}>
                <Stack padding={2}>
                    <Typography variant="h5">{title}</Typography>
                    <Typography variant="subtitle1">{explanation}</Typography>
                </Stack>
                {children}
            </Stack>
        </div>
    );
}
