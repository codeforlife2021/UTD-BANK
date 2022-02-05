import React from "react";
import Footer from "../../components/common/Footer";

import Analytics from "../../components/dashboard/Analytics";
import DashboardWelcome from "../../components/dashboard/DashboardWelcome";
import Transfers from "../../components/dashboard/Transfers";

const DashboardPage = () => {
  return (
    <>
      <DashboardWelcome />
      <Analytics />
      <Transfers />
      <Footer />
    </>
  );
};

export default DashboardPage;
