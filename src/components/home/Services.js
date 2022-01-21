import React from "react";
import SectionTitle from "./SectionTitle";
import ServiceItem from "./ServiceItem";
const Services = () => {
  return (
    <section className="home-service-section pt-100 pb-70">
      <div className="container">
        <div className="home-service-content">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="home-service-item fluid-height">
                <div className="home-service-start full-height">
                  <SectionTitle
                    title="Entirely providing best services"
                    description=" Lorem ipsum dolor sit amet, onsectetur adipisicing elit sed do eiusmod agnamqua ptatem consectetur."
                  />
                  <a
                    href="services.html"
                    className="btn1 blue-gradient btn-with-image"
                  >
                    <i className="flaticon-login"></i>
                    <i className="flaticon-login"></i>
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <ServiceItem
                image="assets/images/service1.png"
                title="Drag and drop functionality"
                description=" Lorem ipsum dolor sit amet, cosectetur adipisicing elit,sed deimod empor inddunt ut ualor sit amet"
                link="service-details.html"
                linkTitle="Read More +"
              />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <ServiceItem
                image="assets/images/service2.png"
                title="Email notifications"
                description="Lorem ipsum dolor sit amet, cosectetur adipisicing elit,sed deimod empor inddunt ut ualor sit amet"
                link="service-details.html"
                linkTitle="Read More +"
              />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <ServiceItem
                image="assets/images/service3.png"
                title="Deadline reminders"
                description=" Lorem ipsum dolor sit amet, cosectetur adipisicing elit,sed deimod empor inddunt ut ualor sit amet"
                link="service-details.html"
                linkTitle="Read More +"
              />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <ServiceItem
                image="assets/images/service4.png"
                title="Simple dashboard"
                description="Lorem ipsum dolor sit amet, cosectetur adipisicing elit,sed deimod empor inddunt ut ualor sit amet"
                link="service-details.html"
                linkTitle="Read More +"
              />
            </div>
            <div className="col-sm-12 offset-md-3 col-md-6 offset-lg-0 col-lg-4">
              <ServiceItem
                image="assets/images/service5.png"
                title="Incredible infrastructure"
                description=" Lorem ipsum dolor sit amet, cosectetur adipisicing elit,sed deimod empor inddunt ut ualor sit amet"
                link="service-details.html"
                linkTitle="Read More +"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
