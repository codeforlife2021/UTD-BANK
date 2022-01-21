import React from "react";
import SectionTitle from "./SectionTitle";
import SectionTitleItem from "./SectionTitleItem";
const Features = () => {
  return (
    <section className="feature-section p-tb-100 overflow-x-hidden">
      <div className="container">
        <SectionTitle
          title="Our valuable features"
          description="Lorem ipsum dolor sit amet consectetur adipisicing sed do"
        />
        <div className="home-feature">
          <div className="home-feature-carousel owl-carousel owl-theme">
            <SectionTitleItem
              renk="feature-carousel-thumb status-blue"
              resim="assets/images/file.png"
              baslik="Fully Encrypted"
              aciklama="Lorem ipsum dolor sit amet, cosectetur adipisicing elit, sed
                    deimod tempor incid-idunt ut dolor sit amet"
            />
            <SectionTitleItem
              renk="feature-carousel-thumb status-orange"
              resim="assets/images/hand.png"
              baslik="Transparent Pricing"
              aciklama="Lorem ipsum dolor sit amet, cosectetur adipisicing elit, sed
                    deimod tempor incid-idunt ut dolor sit amet"
            />
            <SectionTitleItem
              renk="feature-carousel-thumb status-green"
              resim="assets/images/megaphone.png"
              baslik="Instant cashout"
              aciklama="Lorem ipsum dolor sit amet, cosectetur adipisicing elit, sed
                    deimod tempor incid-idunt ut dolor sit amet"
            />
            <SectionTitleItem
              renk="feature-carousel-thumb status-orange"
              resim="assets/images/shield.png"
              baslik="Safe and Secure"
              aciklama="Lorem ipsum dolor sit amet, cosectetur adipisicing elit, sed
                    deimod tempor incid-idunt ut dolor sit amet"
            />
            <SectionTitleItem
              renk="feature-carousel-thumb status-blue"
              resim="assets/images/file.png"
              baslik="Fully Encrypted"
              aciklama="Lorem ipsum dolor sit amet, cosectetur adipisicing elit, sed
                    deimod tempor incid-idunt ut dolor sit amet"
            />
            <SectionTitleItem
              renk="feature-carousel-thumb status-orange"
              resim="assets/images/hand.png"
              baslik="Transparent Pricing"
              aciklama="Lorem ipsum dolor sit amet, cosectetur adipisicing elit, sed
                    deimod tempor incid-idunt ut dolor sit amet"
            />
            <SectionTitleItem
              renk="feature-carousel-thumb status-green"
              resim="assets/images/megaphone.png"
              baslik="Safe and Secure"
              aciklama="Lorem ipsum dolor sit amet, cosectetur adipisicing elit, sed
                    deimod tempor incid-idunt ut dolor sit amet"
            />
            <SectionTitleItem
              renk="feature-carousel-thumb status-orange"
              resim="assets/images/shield.png"
              baslik="Instant cashout"
              aciklama="Lorem ipsum dolor sit amet, cosectetur adipisicing elit, sed
                    deimod tempor incid-idunt ut dolor sit amet"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
