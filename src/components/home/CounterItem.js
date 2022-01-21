import React from "react";

const CounterItem = ({ number, sign, title }) => {
  return (
    <div className="counter-item">
      <h3>
        <span className="counter">{number}</span>
        <span className="counter-text-lg">{sign}</span>
      </h3>
      <p>{title}</p>
      <div className="counter-loader">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default CounterItem;
