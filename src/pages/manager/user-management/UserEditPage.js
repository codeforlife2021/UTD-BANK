import React from "react";
import { Container } from "react-bootstrap";
import PageHeader from "../../../components/common/PageHeader";
import Spacer from "../../../components/common/Spacer";
import ScrollToTopOnMount from "../../../components/common/ScrollToTopOnMount";
import UserEdit from "../../../components/manager/user-management/UserEdit";

const UserEditPage = () => {
  return (
    <>
      <PageHeader
        image="/assets/images/useredit.jpg"
        title=" User Management  "
      />

      <Container>
        <UserEdit />
      </Container>
      <Spacer />
      <ScrollToTopOnMount />
    </>
  );
};

export default UserEditPage;
