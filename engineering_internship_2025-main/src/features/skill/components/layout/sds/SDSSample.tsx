import { css } from "@emotion/react";
import type { PropsWithChildren } from "react";

const generateRandomColor = (toneMin: number = 0, toneMax: number = 255) => {
    const r = toneMin + Math.floor(Math.random() * (toneMax - toneMin + 1));
    const g = toneMin + Math.floor(Math.random() * (toneMax - toneMin + 1));
    const b = toneMin + Math.floor(Math.random() * (toneMax - toneMin + 1));
    return `rgb(${r}, ${g}, ${b})`;
};

const SDSSample = ({
    children,
    label = "Sample",
    width = "100%",
    height = "auto",
}: {
    label?: string;
    width?: string;
    height?: string;
} & PropsWithChildren) => {
    const color = generateRandomColor(100, 255);
    const containerStyle = css({
        width,
        height,
        backgroundColor: generateRandomColor(100, 255),
        backgroundImage: `linear-gradient(45deg, ${color} 25%, transparent 25%, transparent 75%, ${color} 75%), linear-gradient(45deg, ${color} 25%, transparent 25%, transparent 75%, ${color} 75%)`,
        backgroundPosition: "0 0, 30px 30px",
        backgroundSize: "20px 20px",
        boxSizing: "border-box",
        border: `6px solid ${generateRandomColor(0, 150)}`,
        resize: "both",
        overflow: "hidden",
    });

    const innerStyle = css({
        backgroundColor: "white",
        fontSize: "14px",
        fontWeight: "bold",
    });
    return (
        <div css={containerStyle}>
            <span css={innerStyle}>{label}</span>
            {children}
        </div>
    );
};

export default SDSSample;
