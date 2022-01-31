import React from "react";
import "../../assets/css/home.css";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="slider">
      <video
        className="video"
        src="../../assets/videos/bank.mp4"
        autoplay="true"
        muted
        loop="true"
      ></video>
      <div className="overlay"></div>
      <div className="text">
        <h2>Stay in control </h2>
        <h3>your finances with Aila</h3>
        <p>
          The advantage of online banking is that you can pay bills superfast,
          and your account is automatically credited or debited for each deposit
          and payment
        </p>
        <Link to="/authentication" style={{ backgroundColor: "e63719" }}>
          get started
        </Link>
      </div>
    </div>
  );
};

export default Banner;
