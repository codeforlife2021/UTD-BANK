import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../components/common/Footer";
import PageHeader from "../../components/common/PageHeader";
import Spacer from "../../components/common/Spacer";
import TopBar from "../../components/common/TopBar";
import MyTransfers from "../../components/customer/MyTransfers";

const MyTransferPage = () => {
  return (
    <>
      <TopBar />
      <PageHeader
        image="assets/images/myaccountspage.jpg"
        title="My Transfers"
      />
      <Spacer />
      <Container>
        <Row>
          <Col>
            <MyTransfers />
          </Col>
        </Row>
      </Container>
      <Spacer />
      <Spacer />
      <Footer />
    </>
  );
};

export default MyTransferPage;
