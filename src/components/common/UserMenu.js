import React from "react";
import { useStore } from "../../store";
import { Link } from "react-router-dom";
import { Dropdown, DropdownButton } from "react-bootstrap";

import { logout } from "../../store/user/userActions";
const UserMenu = () => {
  const { userState, dispatchUser } = useStore();
  const { user, isUserLogin } = userState;
  const hasWindow = typeof window !== "undefined";

  const handleLogout = () => {
    dispatchUser(logout());
    localStorage.removeItem("token");
  };
  return (
    <div className="navbar-option">
      <div className="navbar-option-item">
        {isUserLogin ? (
          <DropdownButton
            id="dropdown-basic-button"
            title={`Welcome ${user.firstName}`}
          >
            <Dropdown.Item as={Link} to="#">
              Account
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/profile">
              Profile
            </Dropdown.Item>
            <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
          </DropdownButton>
        ) : (
          <Link
            to="/authentication"
            className="btn1 blue-gradient btn-with-image text-nowrap"
          >
            <i className="flaticon-login"></i>
            <i className="flaticon-login"></i>
            Sign Up / Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default UserMenu;
