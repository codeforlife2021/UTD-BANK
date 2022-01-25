import React from "react";

const Feature = ({ image, title, description }) => {
  return (
    <div className="item">
      <div className="feature-carousel-content">
        <div className="feature-carousel-thumb status-blue">
          <img src={image} alt="feature" />
        </div>
        <div className="feature-carousel-details">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
