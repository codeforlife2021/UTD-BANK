import React from "react";
import Features from "../components/home/Features";
import PageHeader from "../components/common/PageHeader";
import TopBar from "../components/common/TopBar";
import Menu from "../components/common/Menu";
import Footer from "../components/common/Footer";
import ScrollToTopOnMount from "../components/common/ScrollToTopOnMount";

const FeaturesPage = () => {
  return (
    <div>
      <Menu />
      <PageHeader
        image="/assets/images/feature-details-1.png"
        title="Features"
      />
      <ScrollToTopOnMount />
    </div>
  );
};

export default FeaturesPage;
