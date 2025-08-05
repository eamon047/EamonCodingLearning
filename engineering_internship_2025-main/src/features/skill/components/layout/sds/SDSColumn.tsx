import { css } from "@emotion/react";
import { PropsWithChildren } from "react";

const containerBaseStyle = css({
    flexShrink: 0,
    flexGrow: 0,
    overflow: "auto",
});

export type Props = {
    size?: "s" | "m" | "l";
} & PropsWithChildren;

export default function SDSColumn({ size = "s", children }: Props) {
    const containerSizeStyle = css(
        size === "s"
            ? {
                  width: "300px",
              }
            : size === "m"
              ? {
                    width: "620px",
                }
              : {
                    width: "940px",
                },
    );
    return (
        <div css={css([containerBaseStyle, containerSizeStyle])}>
            {children}
        </div>
    );
}
