import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket, faCheck } from "@fortawesome/free-solid-svg-icons";

const ListItem = (props) => {
  return (
    <div>
      <FontAwesomeIcon />
      <p>{props.text}</p>
    </div>
  );
};

export default ListItem;
