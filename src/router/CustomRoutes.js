import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUsPage from "../pages/AboutUsPage";
import ContactUsPage from "../pages/ContactUsPage";
import FaqsPage from "../pages/FaqsPage";
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import FeaturesPage from "../pages/FeaturesPage";
import TermsPage from "../pages/TermsPage";
import PricingPage from "../pages/PricingPage";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage";
import AuthenticationPage from "../pages/AuthenticationPage";
import AccountDetailManagementPage from "../pages/employee-manager/AccountDetailManagementPage";
import AccountManagementPage from "../pages/employee-manager/AccountManagementPage";
import UserDetailsManagementPage from "../pages/employee-manager/UserDetailsManagementPage";
import UserManagementPage from "../pages/employee-manager/UserManagementPage";

const CustomRoutes = () => {
  return (
    <Routes>
      {/* EMPLOYEE-MANAGER ROUTES */}
      <Route
        path="/account-details-management"
        element={<AccountDetailManagementPage />}
      />
      <Route path="/account-management" element={<AccountManagementPage />} />
      <Route
        path="/user-details-management"
        element={<UserDetailsManagementPage />}
      />
      <Route path="/user-management" element={<UserManagementPage />} />

      {/* CUSTOMER ROUTES */}

      {/*ALL USER */}
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/features" element={<FeaturesPage />} />

      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/contact-us" element={<ContactUsPage />} />
      <Route path="/faqs" element={<FaqsPage />} />
      <Route path="/terms-conditions" element={<TermsPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/authentication" element={<AuthenticationPage />} />
    </Routes>
  );
};

export default CustomRoutes;
