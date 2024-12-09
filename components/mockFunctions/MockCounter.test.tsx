import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import MockCounter from "./MockCounter";

describe("MockCounter", () => {
  test("Renders correctly", () => {
    render(<MockCounter />);

    const counter = screen.getByText("0");
    expect(counter).toBeInTheDocument();
  });

  test("Handlers are called", async () => {
    user.setup();
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();
    render(
      <MockCounter
        initialValue={10}
        incrementFn={incrementHandler}
        decrementFn={decrementHandler}
      />
    );

    const incrementButton = screen.getByRole("button", { name: "increment" });
    const decrementButton = screen.getByRole("button", { name: "decrement" });

    await user.click(incrementButton);
    await user.click(decrementButton);

    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
