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
import ForgetPasswordPage from "../pages/ForgetPasswordPage";
import ProfilePage from "../pages/customer/ProfilePage";
import MyAccountPage from "../pages/customer/MyAccountPage";
import NewAccountPage from "./../pages/customer/NewAccountPage";
import MyTransferPage from "./../pages/customer/MyTransferPage";
import NewTransferPage from "../pages/customer/NewTransferPage";
import PrivateRoute from "./PrivateRoute";
import AccountEdit from "../pages/manager/AccountEdit";
import AccountPage from "../pages/manager/AccountPage";

import AccountsPage from "../pages/employee/AccountsPage";
import AccountEditPage from "../pages/employee/AccountEditPage";
import AccountsUser from "../components/employee/AccountsUser";
import AccountCreatePage from "../pages/employee/AccountCreatePage";

import UsersPage from "../pages/manager/UsersPage";
import UserEditPage from "../pages/manager/UserEditPage";
import NewTransfer from "../components/customer/NewTransfer";
import ScrollToTopOnMount from "../components/common/ScrollToTopOnMount";
import DashboardPage from "../pages/customer/DashboardPage";

import TransferDetailsPageE from "../pages/employee/TransferDetailsPageE";
import TransfersByUserIdPageE from "../pages/employee/TransfersByUserIdPageE";

import TransferDetailsPageM from "../pages/manager/TransferDetailsPageM";
import TransfersByUserIdPageM from "../pages/manager/TransfersByUserIdPageM";

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

      {/* MANAGER */}

      <Route
        path="/transfer/:id/manager"
        element={
          <PrivateRoute manager={true}>
            <TransferDetailsPageM />
          </PrivateRoute>
        }
      />

      <Route
        path="/transfer/user/:userId/manager"
        element={
          <PrivateRoute manager={true}>
            <TransfersByUserIdPageM />
          </PrivateRoute>
        }
      />

      <Route
        path="/manager/user/:userId"
        element={
          <PrivateRoute manager={true}>
            <UserEditPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/manager/users"
        element={
          <PrivateRoute manager={true}>
            <UsersPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/manager/users/:customerId"
        element={
          <PrivateRoute manager={true}>
            <UserEditPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/account/:accountNo/manager"
        element={
          <PrivateRoute manager={true}>
            <AccountEdit />
          </PrivateRoute>
        }
      />
      <Route
        path="/manager/accounts"
        element={
          <PrivateRoute manager={true}>
            <AccountPage />
          </PrivateRoute>
        }
      />

      {/* EMPLOYEE */}

      <Route
        path="/transfer/:id/employee"
        element={
          <PrivateRoute employee={true}>
            <TransferDetailsPageE />
          </PrivateRoute>
        }
      />

      <Route
        path="/transfer/user/:userId/employee"
        element={
          <PrivateRoute employee={true}>
            <TransfersByUserIdPageE />
          </PrivateRoute>
        }
      />

      <Route
        path="/account/:accountNo/employee"
        element={
          <PrivateRoute employee={true}>
            <AccountEditPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/employee/accounts"
        element={
          <PrivateRoute employee={true}>
            <AccountsPage />
          </PrivateRoute>
        }
      />
      <Route
        path="account/user/:userId/employee"
        element={
          <PrivateRoute employee={true}>
            <AccountsUser />
          </PrivateRoute>
        }
      />
      <Route
        path="account/:userId/create"
        element={
          <PrivateRoute employee={true}>
            <AccountCreatePage />
          </PrivateRoute>
        }
      />

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

      {/*ALL USER */}
      <Route path="/" element={<HomePage />} />
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
