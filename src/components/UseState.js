import React, { useState } from "react";

export const UseState = () => {
  // Runs only once, if the value is set directly it runs everytime
  // const [count, setCount] = useState(() => {
  //   return 0;
  // });

  // Complex state object
  const [state, setState] = useState({ count: 4, theme: "blue" });

  // const count = state.count;
  const decrement = () => {
    // setCount((prevCount) => prevCount - 1);
    setState((prevState) => {
      return { ...prevState, count: prevState.count - 1 };
    });
  };

  const increment = () => {
    // setCount((prevCount) => prevCount + 1);
    setState((prevState) => {
      return { ...prevState, count: prevState.count + 1 };
    });
  };
  const incByAmount = () => {
    // setCount((prevCount) => prevCount + 33);
    setState((prevState) => {
      return { ...prevState, count: prevState.count + 33 };
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>UseState</h1>
      <div
        style={{
          width: "5rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <button onClick={decrement}>-</button>
        <span>{state.count}</span>
        <span>{state.theme}</span>
        <button onClick={increment}>+</button>
        <button onClick={incByAmount}>+33</button>
      </div>
    </div>
  );
};
