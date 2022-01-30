import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../components/common/Footer";
import PageHeader from "../../components/common/PageHeader";
import Spacer from "../../components/common/Spacer";
import TopBar from "../../components/common/TopBar";
import NewAccount from "../../components/customer/NewAccount";

const NewAccountPage = () => {
  return (
    <>
      <PageHeader
        image="/assets/images/home-facility-bg.png"
        title="New Account"
      />
      <Spacer />
      <Container>
        <Row>
          <Col>
            <NewAccount />
          </Col>
        </Row>
      </Container>
      <Spacer />
      <Spacer />
    </>
  );
};

export default NewAccountPage;
