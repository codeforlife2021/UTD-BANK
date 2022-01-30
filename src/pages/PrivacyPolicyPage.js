import React from "react";
import Footer from "../components/common/Footer";
import Menu from "../components/common/Menu";
import PageHeader from "../components/common/PageHeader";
import TopBar from "../components/common/TopBar";
import Policy from "../components/privacyPolicy/Policy";

const PrivacyPolicyPage = () => {
  return (
    <div>
      <Menu />
      <PageHeader image="/assets/images/terms.png" title="Privacy Policy" />
      <Policy />
    </div>
  );
};

export default PrivacyPolicyPage;
