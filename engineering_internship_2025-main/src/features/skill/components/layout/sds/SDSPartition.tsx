import { css } from "@emotion/react";

const containerStyle = css({
    border: "none",
    height: "1px",
    background:
        "linear-gradient(to right, rgba(0, 0, 0, 0),rgba(89, 89, 89, 1), rgba(0, 0, 0, 0))",
    margin: "0",
});

export type Props = {};

export default function SDSPartition({}: Props) {
    return <hr css={containerStyle}></hr>;
}
