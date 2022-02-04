import React from "react";
import Transfers from "../../components/manager/Transfers";
import Footer from "../../components/common/Footer";
import PageHeader from "../../components/common/PageHeader";
import Spacer from "../../components/common/Spacer";
import TopBar from "../../components/common/TopBar";

const TransfersPage = () => {
  return (
    <>
      <TopBar />
      <PageHeader title="All Transfers" image="money-transfer.jpg" />
      <Spacer />
      <Transfers />
      <Spacer />
      <Footer />
    </>
  );
};

export default TransfersPage;
