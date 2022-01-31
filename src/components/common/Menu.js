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
            {/* <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about-us" className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/pricing" className="nav-link">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact-us" className="nav-link">
                  Contact Us
                </Link>
              </li>
            </ul> */}
          </div>

          <UserMenu />
        </nav>
      </div>
    </div>
  );
};
export default Menu;
