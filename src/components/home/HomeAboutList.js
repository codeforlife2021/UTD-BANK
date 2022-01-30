import React from "react";

const HomeAboutList = ({ title, t2, t3, t4, t5, t6 }) => {
  return (
    <div className="home-about-list">
      <div className="home-about-list-item">
        <img src="/assets/images/check.png" alt="checl" />
        {title}
      </div>
      <div className="home-about-list-item">
        <img src="/assets/images/check.png" alt="checl" />
        {t2}
      </div>
      <div className="home-about-list-item">
        <img src="/assets/images/check.png" alt="checl" />
        {t3}
      </div>
      <div className="home-about-list-item">
        <img src="/assets/images/check.png" alt="checl" />
        {t4}
      </div>
      <div className="home-about-list-item">
        <img src="/assets/images/check.png" alt="checl" />
        {t5}
      </div>
      <div className="home-about-list-item">
        <img src="/assets/images/check.png" alt="checl" />
        {t6}
      </div>
    </div>
  );
};

export default HomeAboutList;
