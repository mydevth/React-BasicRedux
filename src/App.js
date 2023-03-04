// App.js

import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch({ type: "INCREMENT" });
  }

  function handleDecrement() {
    dispatch({ type: "DECREMENT" });
  }

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

export default Counter;
