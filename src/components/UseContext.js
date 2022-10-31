import React, { useState } from "react";
import { FunctionContextComponent } from "./contextComponents/FunctionContextComponent";
// import ClassContextComponent from "./contextComponents/ClassContextComponent";
import { ThemeProvider } from "./contextComponents/ThemeContext";

// export const ThemeContext = React.createContext();

export const UseContext = () => {
  // For class component
  //   const [darkTheme, setDarkTheme] = useState(true);
  //   function toggleTheme() {
  //     setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  //   }
  return (
    <>
      <ThemeProvider>
        {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
        <FunctionContextComponent />
        {/* <ClassContextComponent /> */}
      </ThemeProvider>
    </>
  );
};
