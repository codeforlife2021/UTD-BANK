import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../components/common/Footer";
import PageHeader from "../../components/common/PageHeader";
import ScrollToTopOnMount from "../../components/common/ScrollToTopOnMount";
import Spacer from "../../components/common/Spacer";
import TopBar from "../../components/common/TopBar";
import MyTransfers from "../../components/customer/MyTransfers";

const MyTransferPage = () => {
  return (
    <>
      <PageHeader
        image="/assets/images/myaccountspage.jpg"
        title="My Transfers"
      />
      <Spacer size={60} />
      <Container>
        <Row>
          <Col>
            <MyTransfers />
          </Col>
        </Row>
      </Container>
      <Spacer />
      <ScrollToTopOnMount />
    </>
  );
};

export default MyTransferPage;
