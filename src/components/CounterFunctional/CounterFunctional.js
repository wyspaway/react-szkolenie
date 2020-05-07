import React, { useState } from "react";

const CounterFunctional = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>Count: {count}</div>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
      <button onClick={() => setCount({ count: 0 })}>reset</button>
    </div>
  );
};

export default CounterFunctional;
