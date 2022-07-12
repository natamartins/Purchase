import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const CardList = () => {
  return (
    <div>
      <Link to='/list'>
        <div className="cardList">
          <h1>Mês</h1>
          <Card texto="1 Item(s)Restante" />
          <Card texto="1 Item(s)Comprado" />
        </div>
      </Link>
    </div>
  );
};

export default CardList;
