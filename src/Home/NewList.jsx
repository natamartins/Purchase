import React from "react";
import { Link } from "react-router-dom";
import CustomCard from "../components/CustomCard";

const NewList = () => {
  return (
    <Link to="/list">
      <CustomCard containerClass="new-list-container">
        adicionar novas listas
      </CustomCard>
    </Link>
  );
};

export default NewList;
