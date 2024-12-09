/**
 * @jest-environment jsdom
 */
import { render, screen, waitFor } from "@testing-library/react";
import { logRoles } from "@testing-library/react";
//Components
import Page from "./page";
import ListItems from "@/components/ListItems";

describe("Headings and paragraphs", () => {
  test("Primary Heading and paragraph exist in the page", () => {
    render(<Page />);

    const principalHeading = screen.getByRole("heading", {
      level: 1,
    });
    expect(principalHeading).toHaveTextContent("Principal testing page");

    const principalParagraph = screen.getByText(
      "Principal test page for next.js"
    );
    expect(principalParagraph).toBeInTheDocument();
  });

  test("Secondary Heading and paragraph exist in the page", () => {
    render(<Page />);

    const secondaryHeading = screen.getByRole("heading", {
      level: 2,
    });
    expect(secondaryHeading).toHaveTextContent("Secondary testing page");

    const secondaryParagraph = screen.getByText(
      "Secondary test page for next.js"
    );
    expect(secondaryParagraph).toBeInTheDocument();
  });
});

describe("List of inputs to fill", () => {
  const items = ["Name", "Surname", "Pack"];

  test("List exist in the page", () => {
    render(<ListItems items={items} />);

    const listItems = screen.getByRole("list");
    expect(listItems).toBeInTheDocument();
  });

  test("List show all items", () => {
    render(<ListItems items={items} />);

    const allListItems = screen.getAllByRole("listitem");
    expect(allListItems).toHaveLength(items.length);
  });
});

describe("Form Elements", () => {
  test("Name input", () => {
    render(<Page />);

    const nameInput = screen.getByLabelText("Name");
    expect(nameInput).toBeInTheDocument();
  });

  test("Surname input", () => {
    render(<Page />);

    const surnameInput = screen.getByPlaceholderText("Surname");
    expect(surnameInput).toBeInTheDocument();
  });

  test("Pack input", () => {
    render(<Page />);

    const packInput = screen.getByDisplayValue("Premium");
    expect(packInput).toBeInTheDocument();
  });

  test("Submit button", () => {
    render(<Page />);

    const submitButton = screen.getByTestId("submit-button");
    expect(submitButton).toBeInTheDocument();
  });

  test("Not sent button", () => {
    render(<Page />);

    const sentButton = screen.queryByRole("button", {
      name: "Sent",
    });
    expect(sentButton).not.toBeInTheDocument();
  });

  test("Not submit faster at the beggining", () => {
    render(<Page />);

    const submitFasterMsg = screen.queryByText("Submit faster!!!");
    expect(submitFasterMsg).not.toBeInTheDocument();
  });

  test("Submit faster in the document after 1500ms", async () => {
    render(<Page />);

    await waitFor(
      () => {
        const submitFasterMsg = screen.getByText("Submit faster!!!");
        expect(submitFasterMsg).toBeInTheDocument();
      },
      { timeout: 2000 }
    );
  });
});
