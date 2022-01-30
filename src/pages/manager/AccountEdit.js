import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Footer from "../../components/common/Footer";
import PageHeader from "../../components/common/PageHeader";
import Spacer from "../../components/common/Spacer";
import TopBar from "../../components/common/TopBar";

const AccountEdit = () => {
  const { accountNo } = useParams();
  return (
    <>
      <PageHeader title="Account Management" />
      <Container className="mt-5">
        <AccountEdit accountNo={accountNo} />
      </Container>
      <Spacer />
    </>
  );
};

export default AccountEdit;
