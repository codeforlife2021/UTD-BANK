import React from "react";
import { Container } from "react-bootstrap";
import UserEdit from "../../components/manager/UserEdit";
import PageHeader from "../../components/common/PageHeader";
import Spacer from "../../components/common/Spacer";
import Footer from "./../../components/common/Footer";

const UserEditPage = () => {
  return (
    <>
      <PageHeader
        image="/assets/images/testimonial.png"
        title=" - User Management - "
      />
      <Spacer />
      <Container>
        <UserEdit />
      </Container>
      <Spacer />
      <Footer />
    </>
  );
};

export default UserEditPage;
