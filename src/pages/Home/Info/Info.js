import React from "react";

const Info = ({ info }) => {
  return (
    <div className="info">
      <div className="my-container my-container--info">
        <div className="info__content">
          <p>{info}</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
