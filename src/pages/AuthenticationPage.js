import React from "react";
import Authentication from "../components/authentication/Authentication";
import Footer from "../components/common/Footer";
import ScrollToTopOnMount from "../components/common/ScrollToTopOnMount";

const AuthenticationPage = () => {
  return (
    <div>
      <Authentication />
      <ScrollToTopOnMount />
    </div>
  );
};

export default AuthenticationPage;
