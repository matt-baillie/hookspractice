import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { UseState } from "./components/UseState";
import { UseEffect } from "./components/UseEffect";
import { UseMemo } from "./components/UseMemo";
import { UseRef } from "./components/UseRef";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="usestate" element={<UseState />} />
          <Route path="useeffect" element={<UseEffect />} />
          <Route path="usememo" element={<UseMemo />} />
          <Route path="usecontext" />
          <Route path="useref" element={<UseRef />} />
          <Route path="usereducer" />
          <Route path="usetransition" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
