import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const link = {
    margin: "1rem",
    color: "black",
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>Hooks Review</h2>
      <div>
        <Link style={link} to="/">
          Home
        </Link>
        <Link style={link} to="usestate">
          UseState
        </Link>
        <Link style={link} to="useeffect">
          UseEffect
        </Link>
        <Link style={link} to="usememo">
          UseMemo
        </Link>
        <Link style={link} to="useref">
          UseRef
        </Link>
      </div>
    </div>
  );
};

export default Header;
