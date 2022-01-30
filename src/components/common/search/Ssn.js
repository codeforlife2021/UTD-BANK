import React from "react";

export default function ssnNumber(props) {
  const { ssnNumber } = props;
  return (
    <div class="resultCard">
      <div classnNumberame="image is-48x48"></div>
      <h4 class="bolder">{ssnNumber.SSN}</h4>
      <span>
        <b> Name: </b>
        {ssnNumber.FirstName}
      </span>
      <span>
        <b> Name: </b>
        {ssnNumber.LastName}
      </span>
    </div>
  );
}
