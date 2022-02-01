import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useStore } from "../../store";
import { logout } from "../../store/user/userActions";
import UserMenu from "./UserMenu";
import Navbar from "./Navbar";
const Menu = () => {
  const { userState, dispatchUser } = useStore();
  const { user, isUserLogin } = userState;

  const handleLogout = () => {
    dispatchUser(logout());
    localStorage.removeItem("token");
  };

  return (
    <div className="main-nav">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-md navbar-light">
          <a className="navbar-brand" href="index.html">
            <img src="assets/images/logo.png" alt="logo" />
          </a>
          <div
            className="collapse navbar-collapse mean-menu"
            id="navbarSupportedContent"
          >
            <Navbar />
          </div>

          <UserMenu />
        </nav>
      </div>
    </div>
  );
};
export default Menu;
