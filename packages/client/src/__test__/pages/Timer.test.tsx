import React from "react";
import { render, screen } from "@testing-library/react";
import Timer from "../../pages/Timer";

test("Render Timer", () => {
  render(<Timer />);
  const timeWrapper = screen.getByTestId("total-time-wrapper");
  expect(timeWrapper).toBeInTheDocument();
});
