"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div
      style={{ border: "1px solid red", padding: "1rem", width: "min-content" }}
    >
      <h3>{count}</h3>
      <button type="button" onClick={() => setCount(count + 1)}>
        +
      </button>
      <div>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={() => setCount(parseInt(inputValue))}>set</button>
      </div>
    </div>
  );
}
