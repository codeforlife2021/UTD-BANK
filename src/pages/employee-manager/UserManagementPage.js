import React from "react";
import { Container } from "react-bootstrap-v5";
import PageHeader from "../../components/common/PageHeader";
import UserManagement from "../../components/employee-manager/UserManagement";

const UserManagementPage = () => {
  return (
    <div>
      <PageHeader
        image="assets/images/blog-photo-1.png"
        title="User Management"
      />

      <Container>
        <UserManagement />
      </Container>
    </div>
  );
};
export default UserManagementPage;
