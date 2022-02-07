import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../components/common/Footer";
import PageHeader from "../../components/common/PageHeader";
import ScrollToTopOnMount from "../../components/common/ScrollToTopOnMount";
import Spacer from "../../components/common/Spacer";
import TopBar from "../../components/common/TopBar";
import MyAccount from "../../components/customer/MyAccount";

const MyAccountPage = () => {
  return (
    <>
      <PageHeader image="/assets/images/article-img.png" title="My Account" />
      <Spacer />
      <Container>
        <MyAccount />
      </Container>
      <Spacer />
      <Spacer />
      <ScrollToTopOnMount />
    </>
  );
};

export default MyAccountPage;
