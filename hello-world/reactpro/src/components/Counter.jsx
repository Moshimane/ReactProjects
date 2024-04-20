import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [changeCountBy, setChangeCountBy] = useState(1);
  return (
    <div>
      <h1>Count value is: {count}</h1>
      <button onClick={() => setCount(count + changeCountBy)}>Increment</button>
      <button onClick={() => setCount(count - changeCountBy)}>Decrement</button>

      <h1>Change Count By: {changeCountBy}</h1>
      <button onClick={() => setChangeCountBy(changeCountBy + 1)}>
        Increase Change Count
      </button>
      <button onClick={() => setChangeCountBy(changeCountBy - 1)}>
        Decrease Change Count
      </button>
    </div>
  );
}
