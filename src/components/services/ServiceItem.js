import React from "react";

const ServiceItem = ({ image, title, description }) => {
  return (
    <div class="home-service-item fluid-height">
      <div class="home-service-details full-height">
        <div class="home-service-image">
          <img src={image} alt="service" />
        </div>
        <div class="home-service-text">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
