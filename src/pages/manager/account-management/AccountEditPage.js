import React from "react";
import { Container } from "react-bootstrap";

import PageHeader from "../../../components/common/PageHeader";
import ScrollToTopOnMount from "../../../components/common/ScrollToTopOnMount";
import Spacer from "../../../components/common/Spacer";
import AccountEdit from "../../../components/manager/account-manager/AccountEdit";

const AccountEditPage = () => {
  return (
    <>
      <PageHeader
        image="/assets/images/useredit.jpg"
        title=" Account Management  "
      />

      <Container>
        <AccountEdit />
      </Container>
      <Spacer />
      <ScrollToTopOnMount />
    </>
  );
};

export default AccountEditPage;
