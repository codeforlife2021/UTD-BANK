import React from "react";

const SectionTitleItem = (props) => {
  return (
    <div className="item">
      <div className="feature-carousel-content">
        <div className={props.renk}>
          <img src={props.resim} alt="feature" />
        </div>
        <div className="feature-carousel-details">
          <h3>{props.baslik}</h3>
          <p>{props.aciklama}</p>
        </div>
      </div>
    </div>
  );
};

export default SectionTitleItem;
