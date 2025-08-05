import { render, screen } from "@testing-library/react";

const Sample = () => {
    return <p>Vite + React</p>;
};

test("Vite + Reactが表示されている", () => {
    render(<Sample />);
    expect(screen.getByText("Vite + React")).toBeInTheDocument();
});
