import { css } from "@emotion/react";
import tokens from "./tokens";

const containerBaseStyle = css({
    display: "flex",
    height: "60px",
    fontSize: tokens.fontSize.normal,
    alignItems: "center",
});

export type Props = {
    variant?: "light" | "dark";
    align?: "left" | "center";
    title: string;
};

export default function SDSLabel({
    variant = "light",
    align = "left",
    title,
}: Props) {
    const containerColorStyle = css(
        variant === "light"
            ? {
                  color: tokens.textColor.light,
              }
            : {
                  color: "#949494",
              },
    );

    const containerAlignStyle = css(
        align === "left"
            ? {
                  justifyContent: "left",
              }
            : {
                  justifyContent: "center",
              },
    );
    return (
        <label
            css={css([
                containerBaseStyle,
                containerColorStyle,
                containerAlignStyle,
            ])}
        >
            {title}
        </label>
    );
}
