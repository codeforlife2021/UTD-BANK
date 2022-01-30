import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../components/common/Footer";
import PageHeader from "../../components/common/PageHeader";
import Spacer from "../../components/common/Spacer";
import TopBar from "../../components/common/TopBar";
import NewTransfer from "../../components/customer/NewTransfer";

const NewTransferPage = () => {
  return (
    <>
      <PageHeader
        image="/assets/images/feature-details-1.png"
        title="New Transfer"
      />
      <Spacer />
      <Container>
        <Row>
          <Col>
            <NewTransfer />
          </Col>
        </Row>
      </Container>
      <Spacer />
      <Spacer />
    </>
  );
};

export default NewTransferPage;
