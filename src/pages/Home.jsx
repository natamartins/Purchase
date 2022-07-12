import React from "react";
import AddList from "../components/AddList";
import CardList from "../components/CardList";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <AddList />
      <CardList />
    </div>
  );
};

export default Home;
