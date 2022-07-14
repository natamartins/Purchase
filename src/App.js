import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateList from "./components/CreateList";
import store from "./store/index";
import Home from "./Home/Home";
import "./sass/styles.scss";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<CreateList />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
