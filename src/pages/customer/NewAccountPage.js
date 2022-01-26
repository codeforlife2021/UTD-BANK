import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../components/common/Footer";
import PageHeader from "../../components/common/PageHeader";
import Spacer from "../../components/common/Spacer";
import TopBar from "../../components/common/TopBar";
import MyAccount from "../../components/customer/MyAccount";
import NewAccount from "../../components/customer/NewAccount";

const NewAccountPage = () => {
  return (
    <>
      <TopBar />
      <PageHeader
        image="assets/images/myaccountspage.jpg"
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
      <Footer />
    </>
  );
};

export default NewAccountPage;
