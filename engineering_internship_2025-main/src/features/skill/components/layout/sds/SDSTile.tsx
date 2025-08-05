import { css } from "@emotion/react";
import { PropsWithChildren } from "react";

const containerBaseStyle = css({
    borderRadius: "6px",
    borderStyle: "solid",
    borderWidth: "1px",
});

export type Props = {
    variant?: "light" | "dark" | "mid-tone";
} & PropsWithChildren;

export default function SDSTile({ variant = "light", children }: Props) {
    const containerColorStyle = css(
        variant === "light"
            ? {
                  borderColor: "#d3d3d3",
                  backgroundColor: "#faf8f8",
              }
            : variant === "dark"
              ? {
                    borderColor: "#000000",
                    backgroundColor: "#3c3e3f",
                }
              : {
                    borderColor: "#898989",
                    backgroundColor: "#f3f3f3",
                },
    );
    return (
        <div css={css([containerBaseStyle, containerColorStyle])}>
            {children}
        </div>
    );
}
