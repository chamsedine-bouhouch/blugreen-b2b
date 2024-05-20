import React from "react";
import "./Product.css";
const CartProd = ({
  imageSrc,
  title,
  price,
  quantity,
  onIncrement,
  onDecrement,
  onDelete,
}) => {
  return (
    <div className="Container">
      <div className="ProductcartContainer1">
        <div className="Product-image-container1">
          <img src={imageSrc} className="Product-image" alt={title} />
        </div>
        <div className="prod-text-container1">
          <div className="Container">
            <div className="ProductTitle1 poppins-semibold">{title}</div>
            <div className="price1 poppins-semibold">{price}</div>
          </div>
        </div>
        <div className="quantity-controls">
          <button onClick={onDecrement}>-</button>
          <span>{quantity}</span>
          <button onClick={onIncrement}>+</button>
        </div>
        <div className="delete-button">
          <button onClick={onDelete}>X</button>
        </div>
      </div>
    </div>
  );
};

export default CartProd;
