import React from "react";
import { useStore } from "../../store";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { isManager, isEmployee, isCustomer } from "../../utils/auth";

import { logout } from "../../store/user/userActions";
import alertify from "alertifyjs";
const UserMenu = () => {
  const { userState, dispatchUser } = useStore();
  const { user, isUserLogin } = userState;
  const navigate = useNavigate();
  const handleLogout = () => {
    alertify.confirm(
      "Logout",
      "Are you sure you want to logout?",
      () => {
        dispatchUser(logout());
        localStorage.removeItem("token");
        navigate("/");
      },
      () => {
        console.log("canceled");
      }
    );
  };
  return (
    <div
      className="navbar-option"
      style={{ position: "absolute", right: "20px" }}
    >
      <div className="navbar-option-item">
        {isUserLogin ? (
          <DropdownButton
            id="dropdown-basic-button"
            title={` ${user.firstName} ${user.lastName}`}
            align="end"
          >
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
