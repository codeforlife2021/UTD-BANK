import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import MyAccount from "../customer/MyAccount";
const AccountManagement = () => {
  return (
    <div>
      <MyAccount />
      <Button as={Link} to="/account-details-management">
        Details
      </Button>
    </div>
  );
};

export default AccountManagement;
