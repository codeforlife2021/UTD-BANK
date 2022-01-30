import React from "react";
import UserDetailsManagement from "../../components/employee-manager/UserDetailsManagement";
import PageHeader from "../../components/common/PageHeader";
import { Container } from "react-bootstrap";

const UserDetailsManagementPage = () => {
  return (
    <>
      <PageHeader
        image="/assets/images/recent-blog-2.png"
        title="User Details Management"
      />

      <Container>
        <UserDetailsManagement />
      </Container>
    </>
  );
};

export default UserDetailsManagementPage;
