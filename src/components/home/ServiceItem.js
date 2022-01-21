import React from "react";

const ServiceItem = ({ image, title, descripton, link, linkTitle }) => {
  return (
    <div className="home-service-item fluid-height">
      <div className="home-service-details full-height">
        <div className="home-service-image">
          <img src={image} alt="service" />
        </div>
        <div className="home-service-text">
          <h3>{title}</h3>
          <p>{descripton}</p>
          <a href={link}>{linkTitle}</a>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
