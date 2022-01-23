import React from "react";
import Menu from "./Menu";
import { useStore } from "./../../store/index";
import { logout } from "../../store/user/userActions";

import UserMenu from "./UserMenu";
const TopBar = () => {
  return (
    <div className="fixed-top">
      <div className="navbar-area">
        <div className="mobile-nav">
          <a href="index.html" className="logo">
            <img src="assets/images/logo.png" alt="logo" />
          </a>
          <UserMenu />
        </div>

        <Menu />
      </div>
    </div>
  );
};

export default TopBar;
