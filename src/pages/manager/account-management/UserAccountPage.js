import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PageHeader from "../../../components/common/PageHeader";
import ScrollToTopOnMount from "../../../components/common/ScrollToTopOnMount";
import Spacer from "../../../components/common/Spacer";
import TopBar from "../../../components/common/TopBar";
import UserAccounts from "../../../components/manager/account-manager/UserAccounts";

const UserAccountPage = () => {
  return (
    <>
      <PageHeader image="/assets/images/article-img.png" title="User Account" />
      <Spacer />
      <Container>
        <UserAccounts />
      </Container>
      <Spacer />
      <Spacer />
      <ScrollToTopOnMount />
    </>
  );
};

export default UserAccountPage;
