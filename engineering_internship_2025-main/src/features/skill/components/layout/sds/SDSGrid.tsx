import { css } from "@emotion/react";
import { PropsWithChildren } from "react";

const containerStyle = css({
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    alignItems: "flex-start",
    width: "940px",
});

export type Props = {} & PropsWithChildren;

export default function SDSGrid({ children }: Props) {
    return <div css={containerStyle}>{children}</div>;
}
