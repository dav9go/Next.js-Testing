type MockCounterProps = {
  initialValue?: number;
  incrementFn?: () => void;
  decrementFn?: () => void;
};

export default function MockCounter({
  initialValue = 0,
  incrementFn,
  decrementFn,
}: MockCounterProps) {
  return (
    <div>
      <p>{initialValue}</p>
      {incrementFn && <button onClick={incrementFn}>increment</button>}
      {decrementFn && <button onClick={decrementFn}>decrement</button>}
    </div>
  );
}
