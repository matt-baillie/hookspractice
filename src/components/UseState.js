import React, { useState } from "react";

export const UseState = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
    setCount((prevCount) => prevCount - 1);
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
        <span>{count}</span>
        <button>+</button>
      </div>
    </div>
  );
};
