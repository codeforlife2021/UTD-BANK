import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PageHeader from "../../../components/common/PageHeader";
import ScrollToTopOnMount from "../../../components/common/ScrollToTopOnMount";
import Spacer from "../../../components/common/Spacer";
import NewAccount from "../../../components/manager/account-manager/NewAccount";

const NewAccountPage = () => {
  return (
    <>
      <PageHeader
        image="/assets/images/home-facility-bg.png"
        title="New Account"
      />

      <Container>
        <Row>
          <Col>
            <NewAccount />
          </Col>
        </Row>
      </Container>
      <Spacer />
      <ScrollToTopOnMount />
    </>
  );
};

export default NewAccountPage;
