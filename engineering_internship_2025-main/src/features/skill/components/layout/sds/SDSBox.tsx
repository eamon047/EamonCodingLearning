import { css } from "@emotion/react";
import { PropsWithChildren } from "react";

const containerBaseStyle = css({
    overflow: "auto",
});

export type Props = {
    width?: `${number}px`;
    height?: `${number}px` | `${number}vh`;
} & PropsWithChildren;

export default function SDSBox({ width, height, children }: Props) {
    const containerSizeStyle = css({
        width: width || "auto",
        height: height || "auto",
    });
    return (
        <div css={css([containerBaseStyle, containerSizeStyle])}>
            {children}
        </div>
    );
}
