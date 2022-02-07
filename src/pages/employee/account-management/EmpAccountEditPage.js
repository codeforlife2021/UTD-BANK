import React from "react";
import { Container } from "react-bootstrap";
import PageHeader from "../../../components/common/PageHeader";
import ScrollToTopOnMount from "../../../components/common/ScrollToTopOnMount";
import Spacer from "../../../components/common/Spacer";
import EmpAccountEdit from "../../../components/employee/account-manager/EmpAccountEdit";
import AccountEdit from "../../../components/employee/account-manager/EmpAccountEdit";

const EmpAccountEditPage = () => {
  return (
    <>
      <PageHeader
        image="/assets/images/useredit.jpg"
        title=" Account Management  "
      />

      <Container>
        <EmpAccountEdit />
      </Container>
      <Spacer />
      <ScrollToTopOnMount />
    </>
  );
};

export default EmpAccountEditPage;
