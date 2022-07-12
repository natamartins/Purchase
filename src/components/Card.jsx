import React from "react";
import PropTypes from "prop-types";

const Card = ({ texto }) => {
  return (
    <div className="Card">
      <h2>{texto}</h2>
    </div>
  );
};

Card.propTypes = {
  texto: PropTypes.string.isRequired,
};

export default Card;
