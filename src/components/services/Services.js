import React from "react";
import SectionTitle from "../home/SectionTitle";
import ServiceItem from "./ServiceItem";

const Services = () => {
  return (
    <section class="home-service-section p-tb-100">
      <div class="container">
        <SectionTitle
          title="Services we are providing"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod agnamqua ptatem consectetur."
        />
        <div class="home-service-content service-page-grid">
          <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-4">
              <ServiceItem
                image="assets/images/service1.png"
                title="Drag and drop functionality"
                description="Lorem ipsum dolor sit amet, cosectetur adipisicing elit, sed deimod empor inddunt ut ualor sit amet"
              />
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4">
              <ServiceItem
                image="assets/images/service2.png"
                title="Email notifications"
                description="Lorem ipsum dolor sit amet, cosectetur adipisicing elit, sed deimod empor inddunt ut ualor sit amet"
              />
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4">
              <ServiceItem
                image="assets/images/service3.png"
                title="Deadline reminders"
                description="Lorem ipsum dolor sit amet, cosectetur adipisicing elit, sed deimod empor inddunt ut ualor sit amet"
              />
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4">
              <ServiceItem
                image="assets/images/service4.png"
                title="Simple dashboard"
                description="Lorem ipsum dolor sit amet, cosectetur adipisicing elit, sed deimod empor inddunt ut ualor sit amet"
              />
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4">
              <ServiceItem
                image="assets/images/service5.png"
                title="Incredible infrastructure"
                description="Lorem ipsum dolor sit amet, cosectetur adipisicing elit, sed deimod empor inddunt ut ualor sit amet"
              />
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4">
              <ServiceItem
                image="assets/images/service1.png"
                title="Drag and drop functionality"
                description="Lorem ipsum dolor sit amet, cosectetur adipisicing elit, sed deimod empor inddunt ut ualor sit amet"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
