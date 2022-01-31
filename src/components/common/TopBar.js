import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

import UserMenu from "./UserMenu";
import Navbar from "./Navbar";
const TopBar = () => {
  return (
    <div className="fixed-top">
      <div className="navbar-area">
        <Navbar />
      </div>
    </div>
  );
};

export default TopBar;
