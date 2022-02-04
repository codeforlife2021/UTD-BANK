import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "../../store";
import { userInitialState } from "../../store/user/userInitialState";
import SectionTitle from "../home/SectionTitle";
import HomeAboutList from "./../home/HomeAboutList";

const DashboardNavbar = () => {
  const { userState, dispatchUser } = useStore();
  const { user, isUserLogin } = userState;
  return (
    <section className="home-about-section bg-off-white pt-100 pb-70">
      <div className="container">
        <div className="home-about-content">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-12 col-lg-6 order-2 order-lg-1">
              <div className="home-about-item desk-pad-right-10 pb-30">
                <SectionTitle
                  title={`Hi ${user.firstName} ${user.lastName}`}
                  description="Welcome to UTDBANK"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 order-1 order-lg-2">
              <div className="home-about-item home-about-image pb-30 about-image-ellipsis">
                <div className="home-image-content">
                  <img
                    src="/assets/images/manager.jpg"
                    alt="about"
                    style={{ borderRadius: "20%" }}
                    className="scale-one-zero-one"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardNavbar;
