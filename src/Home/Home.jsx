import React from "react";
import NewList from "./NewList";
import List from "./List";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <NewList />
      <List />
    </div>
  );
};

export default Home;
