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
import ForgetPasswordPage from "../pages/ForgetPasswordPage";

const CustomRoutes = () => {
  return (
    <Routes>
      {/* MANAGER ROUTES */}

      {/* EMPLOYEE ROUTES */}

      {/* CUSTOMER ROUTES */}

      {/*ALL USER */}
      <Route path="/" element={<HomePage />} />
      <Route path="/aboutUs" element={<AboutUsPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/features" element={<FeaturesPage />} />

      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/contact-us" element={<ContactUsPage />} />
      <Route path="/faqs" element={<FaqsPage />} />
      <Route path="/terms-conditions" element={<TermsPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/authentication" element={<AuthenticationPage />} />
      <Route path="/forgetPassword" element={<ForgetPasswordPage />} />
    </Routes>
  );
};

export default CustomRoutes;
