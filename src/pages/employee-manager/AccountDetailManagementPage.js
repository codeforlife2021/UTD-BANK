import React from "react";
import AccountDetailManagement from "../../components/employee-manager/AccountDetailManagement";
import PageHeader from "../../components/common/PageHeader";
import { Container } from "react-bootstrap";

const AccountDetailManagementPage = () => {
  return (
    <div>
      <PageHeader
        image="/assets/images/recent-blog-3.png"
        title="Account Detail Management"
      />

      <Container>
        <AccountDetailManagement />
      </Container>
    </div>
  );
};

export default AccountDetailManagementPage;
