import React from "react";
import Footer from "../../components/common/Footer";
import ScrollToTopOnMount from "../../components/common/ScrollToTopOnMount";

import Analytics from "../../components/dashboard/Analytics";
import DashboardWelcome from "../../components/dashboard/DashboardWelcome";
import Transfers from "../../components/dashboard/Transfers";

const DashboardPage = () => {
  return (
    <>
      <DashboardWelcome />
      <Analytics />
      <Transfers />
      <ScrollToTopOnMount />
    </>
  );
};

export default DashboardPage;
