import React from "react";
import TopBar from "../components/common/TopBar";
import PageHeader from "../components/common/PageHeader";
import Pricing from "../components/pricing/Pricing";
import Footer from "../components/common/Footer";
import Menu from "../components/common/Menu";

const PricingPage = () => {
  return (
    <div>
      <Menu />
      <PageHeader image="/assets/images/blog.png" title="Pricing" />
      <Pricing />
    </div>
  );
};

export default PricingPage;
