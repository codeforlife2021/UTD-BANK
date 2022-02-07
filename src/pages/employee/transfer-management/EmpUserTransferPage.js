import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PageHeader from "../../../components/common/PageHeader";
import ScrollToTopOnMount from "../../../components/common/ScrollToTopOnMount";
import Spacer from "../../../components/common/Spacer";
import EmpUserTransfers from "../../../components/employee/transfer-management/EmpUserTransfers";

const EmpUserTransferPage = () => {
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
            <EmpUserTransfers />
          </Col>
        </Row>
      </Container>
      <Spacer />
      <ScrollToTopOnMount />
    </>
  );
};

export default EmpUserTransferPage;
