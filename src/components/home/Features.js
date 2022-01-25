import React from "react";

import Feature from "./Feature";
import SectionTitle from "./SectionTitle";

const Features = () => {
  return (
    <section className="feature-section p-tb-100 overflow-x-hidden">
      <div className="container">
        {
          <SectionTitle
            title="Our valuable features"
            description="Lorem ipsum dolor sit amet consectetur adipisicing sed do"
          />
        }

        <div className="home-feature">
          <div className="home-feature-carousel owl-carousel owl-theme">
            <Feature
              image="assets/images/file.png"
              title="Fully Encrypted"
              description=" Lorem ipsum dolor sit amet, cosectetur adipisicing elit, sed
                    deimod tempor incid-idunt ut dolor sit amet"
            />

            <Feature
              image="assets/images/hand.png"
              title="Transparent Pricing"
              description=" Lorem ipsum dolor sit amet, cosectetur adipisicing elit, sed
                    deimod tempor incid-idunt ut dolor sit amet"
            />

            <Feature
              image="assets/images/megaphone.png"
              title="Instant cashout"
              description=" Lorem ipsum dolor sit amet, cosectetur adipisicing elit, sed
                    deimod tempor incid-idunt ut dolor sit amet"
            />

            <Feature
              image="assets/images/shield.png"
              title="Safe and Secure"
              description="Lorem ipsum dolor sit amet, cosectetur adipisicing elit, sed
                    deimod tempor incid-idunt ut dolor sit amet"
            />

            <Feature
              image="assets/images/file.png"
              title="Fully Encrypted"
              description=" Lorem ipsum dolor sit amet, cosectetur adipisicing elit, sed
                    deimod tempor incid-idunt ut dolor sit amet"
            />

            <Feature
              image="assets/images/hand.png"
              title="Transparent Pricing"
              description=" Lorem ipsum dolor sit amet, cosectetur adipisicing elit, sed
                    deimod tempor incid-idunt ut dolor sit amet"
            />
            <Feature
              image="assets/images/megaphone.png"
              title="Safe and Secure"
              description="Lorem ipsum dolor sit amet, cosectetur adipisicing elit, sed
                    deimod tempor incid-idunt ut dolor sit amet"
            />

            <Feature
              image="assets/images/shield.png"
              title="Instant cashout"
              description="Lorem ipsum dolor sit amet, cosectetur adipisicing elit, sed
                    deimod tempor incid-idunt ut dolor sit amet"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
