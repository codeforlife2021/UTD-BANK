import React from "react";
import Footer from "../../components/common/Footer";
import PageHeader from "../../components/common/PageHeader";
import Spacer from "../../components/common/Spacer";
import TopBar from "../../components/common/TopBar";
import TransferDetails from "../../components/manager/TransferDetails";

const TransferDetailsPageM = () => {
  return (
    <>
      <TopBar />
      <PageHeader title="Transfer Details" image="money-transfer.jpg" />
      <Spacer />
      <TransferDetails />
      <Spacer />
      <Footer />
    </>
  );
};

export default TransferDetailsPageM;
