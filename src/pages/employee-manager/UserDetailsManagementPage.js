import React from "react";
import UserDetailsManagement from "../../components/employee-manager/UserDetailsManagement";
import PageHeader from "../../components/common/PageHeader";
import { Container } from "react-bootstrap";

const UserDetailsManagementPage = () => {
  return (
    <div>
      <PageHeader title="User Details Management" />

      <Container>
        <UserDetailsManagement />
      </Container>
    </div>
  );
};

export default UserDetailsManagementPage;
