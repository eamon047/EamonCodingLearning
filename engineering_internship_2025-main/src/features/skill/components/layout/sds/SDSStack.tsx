import { css } from "@emotion/react";
import { PropsWithChildren } from "react";

const containerStyle = css({
    display: "flex",
    flexDirection: "column",
    gap: "8px",
});

export type Props = {} & PropsWithChildren;

export default function SDSStack({ children }: Props) {
    return <div css={containerStyle}>{children}</div>;
}
