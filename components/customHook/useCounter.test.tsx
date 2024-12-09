import { renderHook, act } from "@testing-library/react";
import useCounter from "./useCounter";

describe("useCounter", () => {
  test("useCounter renders correctly", () => {
    const { result } = renderHook(() => useCounter({ initialValue: 0 }));
    expect(result.current.counter).toBe(0);
  });

  test("Should accept initial value", () => {
    const { result } = renderHook(() => useCounter({ initialValue: 10 }));
    expect(result.current.counter).toBe(10);
  });

  test("Should increment", () => {
    const { result } = renderHook(() => useCounter({ initialValue: 10 }));
    act(() => result.current.increment());
    expect(result.current.counter).toBe(11);
  });

  test("Should decrement", () => {
    const { result } = renderHook(() => useCounter({ initialValue: 100 }));
    act(() => result.current.decrement());
    expect(result.current.counter).toBe(99);
  });
});
