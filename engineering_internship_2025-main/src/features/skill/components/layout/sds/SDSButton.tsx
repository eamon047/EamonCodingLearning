import { css, SerializedStyles } from "@emotion/react";
import { ButtonHTMLAttributes, ReactNode } from "react";
import tokens from "./tokens";

const containerBaseStyle = css({
    display: "flex",
    paddingLeft: "20px",
    paddingRight: "20px",
    height: "60px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "transparent",
    boxSizing: "border-box",
    width: "100%",
    outline: "none",
    alignItems: "center",
    gap: "4px",
    outlineOffset: "-1px",
});

const iconBaseStyle = css({
    "flexShrink": 0,
    "flexGrow": 0,
    "lineHeight": 0,
    "&>*": {
        fontSize: "24px",
    },
});

const titleBaseStyle = css({
    fontSize: "14px",
    flexShrink: 0,
    flexGrow: 0,
});

export type Props = {
    variant?: "light" | "dark";
    align?: "left" | "center";
    icon?: ReactNode;
    title: string;
    sx?: SerializedStyles;
    disabledWithSelected?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function SDSButton({
    variant = "light",
    align = "center",
    icon,
    title,
    sx,
    disabledWithSelected,
    ...props
}: Props) {
    const containerColorStyle = css(
        variant === "light"
            ? {
                  "backgroundColor": tokens.boxHighlight.light,
                  "&:not(:disabled):hover": {
                      backgroundColor: tokens.boxHighlight.light,

                      outline: `1px solid ${tokens.boxOutline.light}`,
                  },
                  "&:not(:disabled):active": {
                      backgroundColor: "transparent",

                      outline: `1px solid ${tokens.boxOutline.light}`,
                  },
              }
            : {
                  "backgroundColor": tokens.boxHighlight.dark,
                  "&:not(:disabled):hover": {
                      backgroundColor: tokens.boxHighlight.dark,

                      outline: `1px solid ${tokens.boxOutline.dark}`,
                  },
                  "&:not(:disabled):active": {
                      backgroundColor: "transparent",

                      outline: `1px solid ${tokens.boxOutline.dark}`,
                  },
              },
    );

    const containerDisabledWithSelectedStyle = css(
        !disabledWithSelected
            ? {}
            : variant === "light"
              ? {
                    backgroundColor: "transparent",
                    outline: `1px solid ${tokens.boxOutline.light}`,
                }
              : {
                    backgroundColor: "transparent",
                    outline: `1px solid ${tokens.boxOutline.dark}`,
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

    const titleColorStyle = css(
        variant === "light"
            ? {
                  color: tokens.textColor.light,
              }
            : {
                  color: tokens.textColor.dark,
              },
    );

    const iconColorStyle = css(
        variant === "light"
            ? {
                  "&>svg": {
                      fill: tokens.textColor.light,
                  },
              }
            : {
                  "&>svg": {
                      fill: tokens.textColor.dark,
                  },
              },
    );
    return (
        <button
            {...props}
            css={css([
                containerBaseStyle,
                containerColorStyle,
                containerAlignStyle,
                containerDisabledWithSelectedStyle,
                sx,
            ])}
            disabled={disabledWithSelected}
        >
            {icon && (
                <span css={css([iconBaseStyle, iconColorStyle])}>{icon}</span>
            )}
            <span css={css([titleBaseStyle, titleColorStyle])}>{title}</span>
        </button>
    );
}
