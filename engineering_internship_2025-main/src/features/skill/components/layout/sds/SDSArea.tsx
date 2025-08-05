import { css } from "@emotion/react";
import { PropsWithChildren } from "react";

const containerBaseStyle = css({});

export type Props = {
    space?: "s" | "m";
} & PropsWithChildren;

export default function SDSArea({ space = "m", children }: Props) {
    const containerSpaceStyle = css(
        space === "s"
            ? {
                  padding: "16px",
              }
            : {
                  padding: "28px",
              },
    );
    return (
        <div css={css([containerBaseStyle, containerSpaceStyle])}>
            {children}
        </div>
    );
}
