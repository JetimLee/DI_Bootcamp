import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const increaseCounter = (count) => {
    setCounter(count + 1);
    console.log(counter);
  };
  const decreaseCounter = (count) => {
    setCounter(count - 1);
    console.log(counter);
  };
  return (
    <div>
      <button onClick={() => increaseCounter(counter)}>increase</button>
      <button onClick={() => decreaseCounter(counter)}>decrease</button>
      <div>{counter}</div>
    </div>
  );
}

export default Counter;
