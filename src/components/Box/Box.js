import React from "react";
import "./Box.css";
const BoxComponent = ({ imageSrc, title, description, price }) => {
  return (
    <div className="Container">
      <div className="BoxContainer">
        <div className="Box-image-container">
          <img src={imageSrc} className="Box-image" alt={title} />
        </div>
        <div className="Box-text-container">
          <div className="Container">
            <div className="BoxTitle poppins-semibold">{title}</div>
            <div className="price poppins-semibold">{price}</div>
          </div>
          <div className="BoxDescription">{description}</div>
        </div>
        <button> Découvrir</button>
      </div>
    </div>
  );
};

export default BoxComponent;
