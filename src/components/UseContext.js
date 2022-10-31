import React, { useState } from "react";
import { FunctionContextComponent } from "./contextComponents/FunctionContextComponent";
import ClassContextComponent from "./contextComponents/ClassContextComponent";

export const ThemeContext = React.createContext();

export const UseContext = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }
  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FunctionContextComponent />
        <ClassContextComponent />
      </ThemeContext.Provider>
    </>
  );
};
