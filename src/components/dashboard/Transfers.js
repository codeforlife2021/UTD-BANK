import React from "react";

import SectionTitle from "../home/SectionTitle";
import Charts from "./Charts";
import Transfer from "./Transfer";

const Transfers = () => {
  return (
    <section className="home-about-section bg-off-white pt-100 pb-70">
      <div className="container">
        <SectionTitle
          title="Your Transfers"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit
              sed do eiusmod agnamqua ptatem consectetur."
        />
        <div className="home-about-content">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-12 col-lg-6 order-2 order-lg-1">
              <div className="home-about-item desk-pad-right-10 pb-30">
                <Transfer />
                <div className="home-about-animation">
                  <div className="home-animation-item">
                    <img
                      src="/assets/images/curve-line.png"
                      alt="animated-icon"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-6 order-1 order-lg-2">
              <div
                style={{ maxWidth: "800px", margin: "0 auto", height: "400px" }}
              >
                <Charts />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transfers;
