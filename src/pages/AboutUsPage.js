import React from "react";
import PageHeader from "../components/common/PageHeader";
import About from "../components/aboutUs/About";
import Retail from "../components/aboutUs/Retail";
import TopBar from "../components/common/TopBar";
import Footer from "../components/common/Footer";
import ScrollToTopOnMount from "../components/common/ScrollToTopOnMount";

const AboutUsPage = () => {
  return (
    <>
      <PageHeader image="/assets/images/about-page.png" title="About Us" />
      <About />
      <Retail />
      <ScrollToTopOnMount />
    </>
  );
};

export default AboutUsPage;
