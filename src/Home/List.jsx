import React from "react";
import { Link } from "react-router-dom";
import CustomCard from "../components/CustomCard";
import ListFooter from "./ListFooter";
import ListItem from "./ListItem";
const List = () => {
  return (
    <CustomCard containerClass="list-container" footer={<ListFooter />}>
      <Link to="/list">
        <div>
          <p className="tite">Mês</p>
          <div className="list-card-body">
            <ListItem text="1 item  restante" />
            <ListItem text="1 item  comprado" />
          </div>
        </div>
      </Link>
    </CustomCard>
  );
};

export default List;
