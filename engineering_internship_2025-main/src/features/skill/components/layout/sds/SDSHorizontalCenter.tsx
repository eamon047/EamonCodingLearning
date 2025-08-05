import { css } from "@emotion/react";
import { PropsWithChildren } from "react";

const containerStyle = css({
    "display": "flex",
    "&>*": {
        flexShrink: 0,
        flexGrow: 0,
    },
    "justifyContent": "center",
});

export type Props = {} & PropsWithChildren;

export default function SDSHorizontalCenter({ children }: Props) {
    return <div css={containerStyle}>{children}</div>;
}
