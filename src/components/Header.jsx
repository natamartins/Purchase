import { AppBar } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static" color="primary">
      <Link to="/">
        <div className="header">
          <p className="tite">lista de compras</p>
        </div>
      </Link>
    </AppBar>
  );
};

export default Header;
