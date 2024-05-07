import React from "react";
import "./Product.css";
const SecondProductComponent = ({
  imageSrc,
  title,
  description,
  price,
  quantity,
}) => {
  return (
    <div className="Container">
      <div className="ProductContainer">
        <div className="Product-image-container">
          <img src={imageSrc} className="Product-image" alt={title} />
        </div>
        <div className="prod-text-container">
          <div className="Container">
            <div className="ProductTitle poppins-semibold">{title}</div>
            <div className="Quantity poppins-semibold">{quantity}</div>
          </div>
          <div className="ProductDescription">{description}</div>
          <div className="Container">
            <div className="price poppins-semibold">{price}</div>
            <button>Découvrir</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondProductComponent;
