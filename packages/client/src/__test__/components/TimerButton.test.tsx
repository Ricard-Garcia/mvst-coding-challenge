import React from "react";
import { render, screen } from "@testing-library/react";
import TimerButton from "../../components/TimerButton";

// Render timer button (light)
test("Render Timer button light", () => {
  render(<TimerButton loadTotalTime={() => {}} isLight={true} />);

  // Check that has the actual button
  const buttonElement = screen.getByTestId("time-button-id");
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveClass("bg-dark");
});

// Render timer button (dark)
test("Render Timer button dark", () => {
  render(<TimerButton loadTotalTime={() => {}} isLight={false} />);

  // Check that has the actual button
  const buttonElement = screen.getByTestId("time-button-id");
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveClass("bg-light");
});
