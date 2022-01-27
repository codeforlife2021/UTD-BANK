import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

import UserMenu from "./UserMenu";
const TopBar = () => {
  return (
    <div className="fixed-top">
      <div className="navbar-area">
        <div className="mobile-nav">
          <Link to="/" className="logo">
            <img src="assets/images/logo.png" alt="logo" />
          </Link>
          <UserMenu />
        </div>

        <Menu />
      </div>
    </div>
  );
};

export default TopBar;
