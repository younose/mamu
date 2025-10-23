import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount((prev) => prev + 1);
  }

  return (
    <div>
      <p>jadi {count}</p>
      <button onClick={increment}>{count}</button>
    </div>
  );
}
