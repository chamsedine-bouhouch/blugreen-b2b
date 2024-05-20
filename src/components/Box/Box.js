import React, { useState } from "react";
import "./Box.css";
const BoxComponent = ({ imageSrc, title, description, price }) => {
  // State to manage the heart icon's color
  const [isRed, setIsRed] = useState("");

  // Handler to toggle the heart icon's color
  const toggleHeartColor = () => {
    setIsRed(!isRed);
  };
  return (
    <div className="Container">
      <div className="BoxContainer">
        <div className="Box-image-container">
          <i
            className={`fas fa-heart HeartIcon ${
              isRed ? "solid-red" : "border-red"
            }`}
            onClick={toggleHeartColor}
          ></i>
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
