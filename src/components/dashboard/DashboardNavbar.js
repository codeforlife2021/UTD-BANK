import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useStore } from "../../store";
import { userInitialState } from "../../store/user/userInitialState";
import SectionTitle from "../home/SectionTitle";
import HomeAboutList from "./../home/HomeAboutList";
import { cardStyles } from "./ReusableStyles";

const DashboardNavbar = () => {
  const { userState, dispatchUser } = useStore();
  const { user, isUserLogin } = userState;
  return (
    <Section>
      <div className="content">
        <img
          src="/assets/images/manager.jpg"
          alt="about"
          style={{ width: "30vw", borderRadius: "20%" }}
          className="scale-one-zero-one"
        />
      </div>
    </Section>
  );
};

export default DashboardNavbar;

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;
