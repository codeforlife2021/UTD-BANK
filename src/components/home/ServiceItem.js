import React from "react";

const ServiceItem = ({ image3, title5, d, link, linkTitle }) => {
  return (
    <>
    <div className="home-service-item fluid-height">
      <div className="home-service-details full-height">
        <div className="home-service-image">
          <img src={image3} alt="service" />
        </div>
        <div className="home-service-text">
          <h3>{title5}</h3>
          <p>{d}</p>
          <a href={link}>{linkTitle}</a>
        </div>
      </div>
    </div>
    </>
  );
};

export default ServiceItem;
