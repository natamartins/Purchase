import React from "react";
import { Link } from "react-router-dom";

const AddList = () => {
  return (
    <Link to='/list'>
      <div className="addList">
        <button>Adicionar lista</button>
      </div>
    </Link>
  );
};

export default AddList;
