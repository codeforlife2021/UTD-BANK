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
    <div className="navbar-option">
      <div className="navbar-option-item">
        {isUserLogin ? (
          <DropdownButton
            id="dropdown-basic-button"
            title={`Welcome ${user.firstName} ${user.lastName}`}
            size="sm"
            align="end"
          >
            {isManager(user.roles) && (
              <>
                <Dropdown.Item as={Link} to="/account-details-management">
                  Account Details Management
                </Dropdown.Item>
                <Dropdown.Divider />

                <Dropdown.Item as={Link} to="/account-management">
                  Account Management
                </Dropdown.Item>
                <Dropdown.Divider />

                <Dropdown.Item as={Link} to="/manager/users/:userId">
                  User Details Management
                </Dropdown.Item>
                <Dropdown.Divider />

                <Dropdown.Item as={Link} to="/manager/users">
                  User Management
                </Dropdown.Item>
                <Dropdown.Divider />
              </>
            )}

            {isEmployee(user.roles) && (
              <>
                <Dropdown.Item as={Link} to="/account-details-management">
                  Account Details Management
                </Dropdown.Item>
                <Dropdown.Divider />

                <Dropdown.Item as={Link} to="/account-management">
                  Account Management
                </Dropdown.Item>
                <Dropdown.Divider />

                <Dropdown.Item as={Link} to="/user-details-management">
                  User Details Management
                </Dropdown.Item>
                <Dropdown.Divider />

                <Dropdown.Item as={Link} to="/user-management">
                  User Management
                </Dropdown.Item>
                <Dropdown.Divider />
              </>
            )}

            <Dropdown.Item as={Link} to="/profile">
              Profile
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/my-account">
              My-Account
            </Dropdown.Item>

            <Dropdown.Item as={Link} to="/my-transfers">
              My-Transfers
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
