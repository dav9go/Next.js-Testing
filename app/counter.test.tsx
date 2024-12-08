/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Counter from "./counter";

const setup = () => {
  render(<Counter />);

  return {
    counterNumber: screen.getByRole("heading", { level: 3 }),
    incrementButton: screen.getByRole("button", { name: "+" }),
    numberInput: screen.getByRole("spinbutton"),
    setButton: screen.getByRole("button", { name: "set" }),
  };
};

describe("Counter", () => {
  test("Counter renders correctly", () => {
    const { counterNumber, incrementButton } = setup();

    expect(counterNumber).toBeInTheDocument();
    expect(incrementButton).toBeInTheDocument();
  });

  test("Renders a count of 0", () => {
    const { counterNumber } = setup();

    expect(counterNumber).toHaveTextContent("0");
  });

  test("Counter adds one when clicking + button", async () => {
    user.setup();
    const { counterNumber, incrementButton } = setup();

    await user.click(incrementButton);
    expect(counterNumber).toHaveTextContent("1");
  });

  test("User sets the counter to an input number", async () => {
    user.setup();
    const { counterNumber, incrementButton, numberInput, setButton } = setup();

    const numberValue = "10";

    await user.type(numberInput, numberValue);
    expect(numberInput).toHaveValue(Number(numberValue));

    await user.click(setButton);
    expect(counterNumber).toHaveTextContent(numberValue);

    await user.click(incrementButton);
    expect(counterNumber).toHaveTextContent(String(Number(numberValue) + 1));
  });
});
