import React from "react";

const SectionTitle = (props) => {
  return (
    <div>
      <div className="section-title">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default SectionTitle;
