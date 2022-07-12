import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Liste from "./pages/Liste";
import "./sass/styles.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<Liste />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
