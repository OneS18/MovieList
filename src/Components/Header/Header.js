import React from "react";
import "./Header.scss";
import Login from "./Login/Login";

const Header = () => {
  return (
    <div className="header-image">
      <div className="header-text">
        <h1 className="header-title">MainVision</h1>
        <Login />
      </div>
    </div>
  );
};

export default Header;
