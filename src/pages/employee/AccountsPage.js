import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Accounts from "../../components/employee/Accounts";
import Footer from "../../components/common/Footer";
import PageHeader from "../../components/common/PageHeader";
import Spacer from "../../components/common/Spacer";
import TopBar from "../../components/common/TopBar";

const AccountsPage = () => {
  return (
    <>
      <PageHeader title="Accounts" />
      <Container>
        <Row>
          <Col>
            <Accounts />
          </Col>
        </Row>
      </Container>
      <Spacer />
      <Footer />
    </>
  );
};

export default AccountsPage;
