import React from "react";
import PageHeader from "../components/common/PageHeader";
import About from "../components/aboutUs/About";
import Retail from "../components/aboutUs/Retail";
import TopBar from "../components/common/TopBar";
import Footer from "../components/common/Footer";

const AboutUsPage = () => {
  return (
    <>
      <PageHeader image="/assets/images/about-page.png" title="aboutUs" />
      <About />
      <Retail />
    </>
  );
};

export default AboutUsPage;
