import React from "react";
import SectionTitle from "./SectionTitle";
import Testimonal from "./Testimonal";
const Testimonals = (props) => {
  return (
    <section className="home-client-section pt-100 pb-50">
      <div className="container">
        <SectionTitle
          title="Clients Feedback"
          description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore"
        />
        <div className="client-carousel-content">
          <div className="client-carousel owl-carousel owl-theme">
            <Testimonal
              image="assets/images/carousel-1.png"
              title="Awesome dolor sit amet, consectetur adipisicing elit sed do eusmod tempor incididunt ut labore et dolore magna aliquaenminim veniam quis nostrud dolore magn doloreut labore dolore magn."
              d1="Devit M. kolin"
              d2="CEO & Founder"
            />
            <Testimonal
              image="assets/images/carousel-2.png"
              title=" Very ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae."
              d1="Sienna Miller"
              d2="CTO"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonals;
