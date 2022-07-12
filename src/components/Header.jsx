import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to="/">
      <header lassName="header">
        <h1 className="sidbar">Purchase list</h1>
      </header>
    </Link>
  );
};

export default Header;
