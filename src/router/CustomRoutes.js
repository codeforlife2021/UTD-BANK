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
import ProfilePage from "../pages/customer/ProfilePage";
import MyAccountPage from "../pages/customer/MyAccountPage";
import MyTransferPage from "./../pages/customer/MyTransferPage";
import NewTransferPage from "../pages/customer/NewTransferPage";
import PrivateRoute from "./PrivateRoute";
import DashboardPage from "../pages/customer/DashboardPage";
import UsersPage from "../pages/manager/user-management/UsersPage";
import UserEditPage from "../pages/manager/user-management/UserEditPage";
import UserTransferPage from "../pages/manager/transfer-management/UserTransferPage";
import UserAccountPage from "../pages/manager/account-management/UserAccountPage";
import NewAccountPage from "../pages/manager/account-management/NewAccountPage";
import AccountEditPage from "../pages/manager/account-management/AccountEditPage";
import EmpUserspage from "../pages/employee/user-management/EmpUsersPage";
import EmpUserEditPage from "../pages/employee/user-management/EmpUserEditPage";
import EmpUserAccountPage from "../pages/employee/account-management/EmpUserAccountPage";
import EmpNewAccountPage from "../pages/employee/account-management/EmpNewAccountPage";
import EmpAccountEditPage from "../pages/employee/account-management/EmpAccountEditPage";
import EmpUserTransferPage from "../pages/employee/transfer-management/EmpUserTransferPage";
import NotAuthorizedPage from "../pages/customer/NotAuthorizedPage";

const CustomRoutes = () => {
  return (
    <Routes>
      {/* MANAGER*/}
      {/* User-Management */}

      <Route
        exact
        path="/usermanagement"
        element={
          <PrivateRoute manager={true}>
            <UsersPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/usermanagement/:userId"
        element={
          <PrivateRoute manager={true}>
            <UserEditPage />
          </PrivateRoute>
        }
      />

      {/* Account Management */}
      <Route
        path="/useraccount/:userId"
        element={
          <PrivateRoute manager={true}>
            <UserAccountPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/create-account/:userId"
        element={
          <PrivateRoute manager={true}>
            <NewAccountPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/accountedit/:accountNo"
        element={
          <PrivateRoute manager={true}>
            <AccountEditPage />
          </PrivateRoute>
        }
      />
      {/* Transfer Management */}

      <Route
        path="/usertransfer/:userId"
        element={
          <PrivateRoute manager={true}>
            <UserTransferPage />
          </PrivateRoute>
        }
      />

      {/* ----------------------------------------------------------------------------------------------------- */}

      {/* EMPLOYEE*/}
      {/* User-Management */}

      <Route
        path="/emp-usermanagement"
        element={
          <PrivateRoute employee={true}>
            <EmpUserspage />
          </PrivateRoute>
        }
      />
      <Route
        path="/emp-usermanagement/:userId"
        element={
          <PrivateRoute employee={true}>
            <EmpUserEditPage />
          </PrivateRoute>
        }
      />

      {/* Account Management */}
      <Route
        path="/emp-useraccount/:userId"
        element={
          <PrivateRoute employee={true}>
            <EmpUserAccountPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/emp-create-account/:userId"
        element={
          <PrivateRoute employee={true}>
            <EmpNewAccountPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/emp-accountedit/:accountNo"
        element={
          <PrivateRoute employee={true}>
            <EmpAccountEditPage />
          </PrivateRoute>
        }
      />
      {/* Transfer Management */}

      <Route
        path="/emp-usertransfer/:userId"
        element={
          <PrivateRoute employee={true}>
            <EmpUserTransferPage />
          </PrivateRoute>
        }
      />

      {/* ----------------------------------------------------------------------------------------------------- */}

      {/* CUSTOMER ROUTES */}

      <Route
        path="/my-transfers"
        element={
          <PrivateRoute>
            <MyTransferPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/my-dashboard"
        element={
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        }
      />
      <Route
        path="/account/create"
        element={
          <PrivateRoute>
            <NewTransferPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/my-account"
        element={
          <PrivateRoute>
            <MyAccountPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/create-account"
        element={
          <PrivateRoute>
            <NewAccountPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/create-transfer"
        element={
          <PrivateRoute>
            <NewTransferPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/account/:accountNo/user"
        element={
          <PrivateRoute>
            <AccountEditPage />
          </PrivateRoute>
        }
      />
      {/* ----------------------------------------------------------------------------------------------------- */}
      {/*ALL USER */}
      <Route exact path="/" element={<HomePage />} />
      <Route path="/not-authorized" element={<NotAuthorizedPage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/features" element={<FeaturesPage />} />

      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/contact-us" element={<ContactUsPage />} />
      <Route path="/forget-password" element={<ForgetPasswordPage />} />
      <Route path="/faqs" element={<FaqsPage />} />
      <Route path="/terms-conditions" element={<TermsPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/authentication" element={<AuthenticationPage />} />
    </Routes>
  );
};

export default CustomRoutes;
