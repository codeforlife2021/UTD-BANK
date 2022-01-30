import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../components/common/Footer";
import PageHeader from "../../components/common/PageHeader";
import Spacer from "../../components/common/Spacer";
import TopBar from "../../components/common/TopBar";
import MyAccount from "../../components/customer/MyAccount";
import Users from "../../components/manager/Users";

const Userspage = () => {
  return (
    <>
      <PageHeader image="/assets/images/article-img.png" title="My Account" />
      <Spacer />
      <Container>
        <Users />
      </Container>
      <Spacer />
      <Spacer />
    </>
  );
};

export default Userspage;
