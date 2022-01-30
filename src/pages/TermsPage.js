import React from "react";
import PageHeader from "../components/common/PageHeader";
import Terms from "../components/termsCondition/Terms";

const TermsPage = () => {
  return (
    <div>
      <PageHeader image="/assets/images/terms.png" title="Terms & Conditions" />
      <Terms />
    </div>
  );
};

export default TermsPage;
