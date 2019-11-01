import React from "react"
import { render, cleanup, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import  { getByText } from "@testing-library/dom";
import Toggle from "./hooks/Toggle";

afterEach(cleanup);

it("renders", () => {
    const { asFragment } = render(<Toggle text="false" />); 
    expect(asFragment()).toMatchSnapshot();
});

it("tests", () => {
    const { getByText } = render(<Toggle />);

    // expect(getByTestId("divvy")).toHaveClass("color-mode_toggle");
    fireEvent.click(getByText("toggleMode"))
    expect(getByText("toggleMode")).toHaveClass("toggle");
});