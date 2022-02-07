import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PageHeader from "../../../components/common/PageHeader";
import ScrollToTopOnMount from "../../../components/common/ScrollToTopOnMount";
import Spacer from "../../../components/common/Spacer";
import EmpNewAccount from "./../../../components/employee/account-manager/EmpNewAccount";

const EmpNewAccountPage = () => {
  return (
    <>
      <PageHeader
        image="/assets/images/home-facility-bg.png"
        title="New Account"
      />

      <Container>
        <Row>
          <Col>
            <EmpNewAccount />
          </Col>
        </Row>
      </Container>
      <Spacer />
      <ScrollToTopOnMount />
    </>
  );
};

export default EmpNewAccountPage;
