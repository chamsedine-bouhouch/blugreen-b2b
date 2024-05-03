import React from "react";
import "./Product.css";
const Product = ({ imageSrc, title, description, price, quantity }) => {
  return (
    <div className="Container">
      <div className="ProductContainer">
        <div className="Product-image-container">
          <img src={imageSrc} className="Product-image" alt={title} />
        </div>
        <div className="Product-text-container">
          <div className="ProductTitle poppins-semibold">{title}</div>
          <div className="ProductDescription">{description}</div>
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
