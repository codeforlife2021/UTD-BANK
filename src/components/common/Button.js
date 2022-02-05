import React from "react";
import { Link } from "react-router-dom";

const Button = ({ title, link }) => {
  return (
    <>
      <Link to={link} className="btn1 blue-gradient btn-with-image">
        <i className="flaticon-login"></i>
        <i className="flaticon-login"></i>
        {title}
      </Link>
    </>
  );
};

export default Button;
