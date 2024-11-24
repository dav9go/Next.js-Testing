/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Page from "./page";

test("Heading and paragraph information exist in the page", () => {
  render(<Page />);

  const mainHeading = screen.getByRole("heading");
  expect(mainHeading).toHaveTextContent("Principal testing page");

  const mainParagraph = screen.getByText("Principal test page for next.js");
  expect(mainParagraph).toBeInTheDocument();
});
