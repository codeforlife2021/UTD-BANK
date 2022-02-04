import React from "react";
import SectionTitle from "./SectionTitle";
import Testimonal from "./Testimonal";
import OwlCarousel from "react-owl-carousel";
const Testimonals = (props) => {
  return (
    <section className="home-client-section pt-100 pb-50">
      <div className="container">
        <SectionTitle
          title="Clients Feedback"
          description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore"
        />
         <OwlCarousel
            className="owl-theme client-carousel"
            loop
            margin={10}
            nav={true}
            items={1}
            dots={false}
            navText={[
              '<span class="flaticon-left-arrow"></span>',
              '<span class="flaticon-right-arrow"></span>',
            ]}
            navClass={[
              "carousel-control-item carousel-control-item-left",
              "carousel-control-item carousel-control-item-right",
            ]}
          >
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
        </OwlCarousel> 
      </div>
    </section>
  );
};
export default Testimonals;
