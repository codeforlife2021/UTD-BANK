import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/common/Footer";
import PageHeader from "../../components/common/PageHeader";
import Spacer from "../../components/common/Spacer";
import TopBar from "../../components/common/TopBar";
import Accounts from "../../components/manager/Accounts";

const AccountPage = () => {
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
    </>
  );
};
export default AccountPage;
