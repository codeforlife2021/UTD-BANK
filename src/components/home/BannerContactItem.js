import React from "react";

const BannerContactItem = (props) => {
  return (
    <div className="support-group-item">
      <div className="support-thumb">
        <img src={props.img} alt="support" />
      </div>
      <div className="support-details">
        <h3>
          <a href={props.link}>{props.icerik}</a>
        </h3>
        <p>{props.baslik}</p>
      </div>
    </div>
  );
};

export default BannerContactItem;
