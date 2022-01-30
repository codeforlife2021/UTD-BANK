import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import PageHeader from "../../components/common/PageHeader";
import Spacer from "../../components/common/Spacer";
import TopBar from "../../components/common/TopBar";
import AccountEdit from "../../components/customer/AccountEdit";

const AccountEditPage = () => {
  const { accountNo } = useParams();
  return (
    <>
      <TopBar />
      <PageHeader title="Account Management" />
      <Container className="mt-5">
        <AccountEdit accountNo={accountNo} />
      </Container>
      <Spacer />
    </>
  );
};
export default AccountEditPage;
