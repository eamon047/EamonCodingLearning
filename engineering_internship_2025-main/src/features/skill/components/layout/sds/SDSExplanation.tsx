import { css } from "@emotion/react";
import { PropsWithChildren } from "react";
import tokens from "./tokens";

const containerBaseStyle = css({
    fontSize: "12px",
    lineHeight: "1.5",
});

export type Props = {
    variant?: "light" | "dark";
    align?: "left" | "center";
} & PropsWithChildren;

export default function SDSExplanation({
    variant = "light",
    align = "left",
    children,
}: Props) {
    const containerColorStyle = css(
        variant === "light"
            ? {
                  color: tokens.textColor.light,
              }
            : {
                  color: tokens.textColor.dark,
              },
    );

    const containerAlignStyle = css(
        align === "left" ? { textAlign: "left" } : { textAlign: "center" },
    );
    return (
        <p
            css={css([
                containerBaseStyle,
                containerColorStyle,
                containerAlignStyle,
            ])}
        >
            {children}
        </p>
    );
}
