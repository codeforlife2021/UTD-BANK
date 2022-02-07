import React from "react";
import { Container } from "react-bootstrap";
import PageHeader from "../../../components/common/PageHeader";
import Spacer from "../../../components/common/Spacer";
import ScrollToTopOnMount from "../../../components/common/ScrollToTopOnMount";
import EmpUserEdit from "../../../components/employee/user-management/EmpUserEdit";

const EmpUserEditPage = () => {
  return (
    <>
      <PageHeader
        image="/assets/images/useredit.jpg"
        title=" User Management  "
      />

      <Container>
        <EmpUserEdit />
      </Container>
      <Spacer />
      <ScrollToTopOnMount />
    </>
  );
};

export default EmpUserEditPage;
