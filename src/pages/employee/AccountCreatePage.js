import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Footer from "../../components/common/Footer";
import PageHeader from "../../components/common/PageHeader";
import Spacer from "../../components/common/Spacer";
import TopBar from "../../components/common/TopBar";
import AccountCreate from "../../components/employee/AccountCreate";

const AccountCreatePage = () => {
  const { userId } = useParams();

  return (
    <>
      <PageHeader title={`Account Management of User Id : ${userId}`} />
      <Container className="mt-5">
        <AccountCreate userId={userId} />
      </Container>
      <Spacer />
      <Footer />
    </>
  );
};

export default AccountCreatePage;
