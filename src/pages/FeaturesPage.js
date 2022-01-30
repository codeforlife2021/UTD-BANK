import React from "react";
import Features from "../components/home/Features";
import PageHeader from "../components/common/PageHeader";
import TopBar from "../components/common/TopBar";
import Menu from "../components/common/Menu";
import Footer from "../components/common/Footer";

const FeaturesPage = () => {
  return (
    <div>
      <TopBar />
      <Menu />
      <PageHeader
        image="/assets/images/feature-details-1.png"
        title="Features"
      />
      <Features />
      <Footer />
    </div>
  );
};

export default FeaturesPage;
