import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { UseState } from "./components/UseState";
import { UseEffect } from "./components/UseEffect";
import { UseMemo } from "./components/UseMemo";
import { UseRef } from "./components/UseRef";
import { CustomHooks } from "./components/CustomHooks";
import { UseReducer } from "./components/UseReducer";
import { UseContext } from "./components/UseContext";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="usestate" element={<UseState />} />
          <Route path="useeffect" element={<UseEffect />} />
          <Route path="usememo" element={<UseMemo />} />
          <Route path="usecontext" element={<UseContext />} />
          <Route path="useref" element={<UseRef />} />
          <Route path="customhooks" element={<CustomHooks />} />
          <Route path="usereducer" element={<UseReducer />} />
          <Route path="usetransition" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
