import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Footer from "../../components/common/Footer";
import PageHeader from "../../components/common/PageHeader";
import Spacer from "../../components/common/Spacer";
import TopBar from "../../components/common/TopBar";
import AccountsUser from "../../components/employee/AccountsUser";

const AccountUserPage = () => {
  const { userId } = useParams();
  return (
    <>
      <PageHeader title={`Owner of account number ${userId}`} />
      <Container className="mt-5">
        <AccountsUser userId={userId} />
      </Container>
      <Spacer />
    </>
  );
};

export default AccountUserPage;
