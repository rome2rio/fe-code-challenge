import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";

test("render page without crashing", async () => {
  render(<App />)!;
});

test("tagline is on page", async () => {
  render(<App />);

  expect(screen.getByRole("heading")).toHaveTextContent(
    "Discover how to get anywhere by plane, train, bus, ferry & car"
  );
});
