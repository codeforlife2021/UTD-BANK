import React from "react";
import HomeAboutList from "./HomeAboutList";
import SectionTitle from "./SectionTitle";

const HomeAbout = () => {
  return (
    <section className="home-about-section bg-off-white pt-100 pb-70">
      <div className="container">
        <div className="home-about-content">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-12 col-lg-6 order-2 order-lg-1">
              <div className="home-about-item desk-pad-right-10 pb-30">
                <SectionTitle
                  title="A fully integrated suite for Large enterprise"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod cste et dolore magnam aliquam quaera voluptatem."
                />

                <HomeAboutList
                  title="International Payments"
                  t2="Request Features"
                  t3="Premium Support"
                  t4="Direct Debit"
                  t5="Automated Accounting"
                  t6="Web Design"
                />
                <div className="home-about-animation">
                  <div className="home-animation-item">
                    <img
                      src="assets/images/curve-line.png"
                      alt="animated-icon"
                    />
                  </div>
                  <div className="home-animation-item">
                    <img src="assets/images/triangle.png" alt="animated-icon" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 order-1 order-lg-2">
              <div className="home-about-item home-about-image pb-30 about-image-ellipsis">
                <div className="home-image-content">
                  <img
                    src="assets/images/enterprise.png"
                    alt="about"
                    className="scale-one-zero-one"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="section-mtb-40"></div>

          <div className="row align-items-center">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="home-about-item home-about-image pb-30 about-image-shape">
                <div className="home-image-content">
                  <img
                    src="assets/images/business.png"
                    alt="about"
                    className="scale-one-zero-one"
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="home-about-item desk-pad-left-10 pb-30">
                <SectionTitle
                  title="Small to medium-sized businesses"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod cste et dolore magnam aliquam quaera voluptatem."
                />

                <HomeAboutList
                  title="Deposit Checks Instantly"
                  t2="A Powerful Open API"
                  t3="Affiliates And Partnerships"
                  t4="Coverage Around The World"
                  t5="Business Without Borders"
                  t6="Web Design"
                />
              </div>
            </div>
          </div>

          <div className="section-mtb-40"></div>

          <div className="row align-items-center">
            <div className="col-sm-12 col-md-12 col-lg-6 order-2 order-lg-1">
              <div className="home-about-item desk-pad-right-10 pb-30">
                <SectionTitle
                  title="Entrepreneurs, and sole traders & Freelancers"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod cste et dolore magnam aliquam quaera voluptatem."
                />

                <HomeAboutList
                  title="International Payments"
                  t2="Request Features"
                  t3="Premium Support"
                  t4="Direct Debit"
                  t5="Automated Accounting"
                  t6="Web Design"
                />
                <div className="home-about-animation">
                  <div className="home-animation-item">
                    <img
                      src="assets/images/curve-line.png"
                      alt="animated-icon"
                    />
                  </div>
                  <div className="home-animation-item">
                    <img src="assets/images/triangle.png" alt="animated-icon" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 order-1 order-lg-2">
              <div className="home-about-item home-about-image about-image-rectangle pb-30">
                <div className="home-image-content">
                  <img
                    src="assets/images/entrepreneur.png"
                    alt="about"
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

export default HomeAbout;
