import React from "react";
import { Container } from "react-bootstrap";
import Users from "../../components/manager/Users";
import PageHeader from "../../components/common/PageHeader";
import Spacer from "../../components/common/Spacer";
import Footer from "./../../components/common/Footer";

const UsersPage = () => {
  return (
    <>
      <PageHeader image="/assets/images/terms.png" title="User Management" />
      <Spacer />
      <Container>
        <Users />
      </Container>
      <Spacer />
      <Footer />
    </>
  );
};

export default UsersPage;
