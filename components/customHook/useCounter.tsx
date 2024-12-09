//Hooks
import { useState } from "react";

type UseCounterProps = {
  initialValue?: number;
};

export default function useCounter({ initialValue = 0 }: UseCounterProps) {
  const [counter, setCounter] = useState<number>(initialValue);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return { counter, increment, decrement };
}
