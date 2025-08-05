import { css } from "@emotion/react";
import { InputHTMLAttributes, useState } from "react";
import tokens from "./tokens";

const containerBaseStyle = css({
    height: "60px",
    borderWidth: "1px",
    borderStyle: "solid",
    display: "flex",
    alignItems: "center",
    paddingLeft: "20px",
    paddingRight: "20px",
    borderRadius: "6px",
    boxSizing: "border-box",
});

const innerBaseStyle = css({
    "border": "none",
    "backgroundColor": "transparent",
    "outline": "none",
    "display": "block",
    "fontSize": "12px",
    "&::placeholder": {
        color: "#898989",
    },
});

export type Props = {
    variant?: "light" | "dark";
} & InputHTMLAttributes<HTMLInputElement>;

export default function SDSInput({
    variant = "light",
    onChange,
    ...props
}: Props) {
    const [input, setInput] = useState("");
    const containerColorStyle = css(
        variant === "light"
            ? {
                  backgroundColor: tokens.boxHighlight.light,
                  borderColor: tokens.boxOutline.light,
              }
            : {
                  backgroundColor: tokens.boxHighlight.dark,
                  borderColor: tokens.boxOutline.dark,
              },
    );

    const innerColorStyle = css(
        variant === "light"
            ? {
                  color: tokens.textColor.light,
              }
            : {
                  color: tokens.textColor.dark,
              },
    );

    return (
        <div css={css([containerBaseStyle, containerColorStyle])}>
            <input
                type="text"
                {...props}
                css={css([innerBaseStyle, innerColorStyle])}
                onChange={(e) => {
                    setInput(e.target.value);
                    onChange && onChange(e);
                }}
                value={input}
            ></input>
        </div>
    );
}
