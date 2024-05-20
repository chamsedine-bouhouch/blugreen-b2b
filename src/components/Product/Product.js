import React, { useState } from "react";
import "./Product.css";

const Product = ({ imageSrc, title, price, quantity }) => {
  // State to manage the heart icon's color
  const [isRed, setIsRed] = useState("");

  // Handler to toggle the heart icon's color
  const toggleHeartColor = () => {
    setIsRed(!isRed);
  };

  return (
    <div className="Container">
      <div className="ProductContainer">
        <div className="Product-image-container">
          <i
            className={`fas fa-heart HeartIcon ${
              isRed ? "solid-red" : "border-red"
            }`}
            onClick={toggleHeartColor}
          ></i>
          <img src={imageSrc} className="Product-image" alt={title} />
        </div>

        <div className="Product-text-container">
          <div className="ProductTitle poppins-semibold">{title}</div>
          <div className="Container">
            <div className="price poppins-semibold">{price}</div>
            <div className="Quantity poppins-semibold">{quantity}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
