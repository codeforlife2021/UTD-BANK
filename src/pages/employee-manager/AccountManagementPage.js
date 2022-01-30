import React from "react";
import AccountManagement from "../../components/employee-manager/AccountManagement";
import PageHeader from "../../components/common/PageHeader";
import { Container } from "react-bootstrap";
import TopBar from "../../components/common/TopBar";
import Footer from "../../components/common/Footer";
import Spacer from "../../components/common/Spacer";
const AccountManagementPage = () => {
  return (
    <>
      <PageHeader
        image="/assets/images/carousel-sqare.png"
        title="Account Management"
      />

      <Container>
        <AccountManagement />
      </Container>
      <Spacer />
    </>
  );
};

export default AccountManagementPage;
