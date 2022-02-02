import React from "react";
import styled from "styled-components";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import Spacer from "../../components/common/Spacer";
import Analytics from "../../components/dashboard/Analytics";
import DashboardNavbar from "./../../components/dashboard/DashboardNavbar";
import Earnings from "./../../components/dashboard/Earnings";
import Transfers from "./../../components/dashboard/Transfers";
import Profile from "./../../components/dashboard/Profile";
import FAQ from "./../../components/dashboard/FAQ";

const DashboardPage = () => {
  return (
    <Section>
      <Spacer />
      <div className="grid">
        <div className="row__one">
          <Analytics />
          <FAQ />
        </div>
        <div className="row__two">
          <Earnings />
          <Transfers />
          <Profile />
        </div>
      </div>
      <Spacer />
      <Footer />
    </Section>
  );
};

export default DashboardPage;

const Section = styled.section`
  padding: 2rem;
  height: 100%;
  .grid {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
    margin-top: 2rem;
    .row__one {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      height: 50%;
      gap: 1rem;
    }
    .row__two {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      height: 50%;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
    .grid {
      .row__one,
      .row__two {
        grid-template-columns: 1fr;
      }
    }
  }
`;
