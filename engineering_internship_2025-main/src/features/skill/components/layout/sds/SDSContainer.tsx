import { css } from "@emotion/react";
import { PropsWithChildren } from "react";

const containerBaseStyle = css({
    paddingTop: "24px",
    paddingBottom: "24px",
});

export type Props = {} & PropsWithChildren;

export default function SDSContainer({ children }: Props) {
    return <div css={containerBaseStyle}>{children}</div>;
}
