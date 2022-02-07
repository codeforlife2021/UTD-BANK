import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PageHeader from "../../../components/common/PageHeader";
import ScrollToTopOnMount from "../../../components/common/ScrollToTopOnMount";
import Spacer from "../../../components/common/Spacer";
import EmpUserAccounts from "../../../components/employee/account-manager/EmpUserAccounts";

const EmpUserAccountPage = () => {
  return (
    <>
      <PageHeader image="/assets/images/article-img.png" title="User Account" />
      <Spacer />
      <Container>
        <EmpUserAccounts />
      </Container>
      <Spacer />
      <Spacer />
      <ScrollToTopOnMount />
    </>
  );
};

export default EmpUserAccountPage;
