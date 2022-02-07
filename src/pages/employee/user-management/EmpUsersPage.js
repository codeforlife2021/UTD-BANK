import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PageHeader from "../../../components/common/PageHeader";

import ScrollToTopOnMount from "../../../components/common/ScrollToTopOnMount";
import Spacer from "../../../components/common/Spacer";
import EmpUsers from "../../../components/employee/user-management/EmpUsers";

const EmpUserspage = () => {
  return (
    <>
      <PageHeader
        image="/assets/images/usersearchh.jpg"
        title="User Management"
      />
      <Spacer size={60} />
      <Container>
        <Row>
          <Col>
            <EmpUsers />
          </Col>
        </Row>
      </Container>
      <Spacer />
      <ScrollToTopOnMount />
    </>
  );
};

export default EmpUserspage;
