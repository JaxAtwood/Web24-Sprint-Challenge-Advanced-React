import React from "react"
import { render, cleanup, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
// import { getByDisplayValue } from "@testing-library/dom";
import Toggle from "./hooks/Toggle";

afterEach(cleanup);

it("renders", () => {
    const { asFragment } = render(<Toggle text="false" />); 
    expect(asFragment()).toMatchSnapshot();
});

it("tests", () => {
    const { getByTestId, getByText } = render(<Toggle />);

    expect(getByTestId("divvy")).toHaveClass("toggle");
    fireEvent.click(getByText("Toggle"))

});

// const { getByLabelText } = render(<Toggle />);
// const container = document.body
// const inputNode = getByLabelText(container, 'toggle', {
//   selector: 'onClick',
// })