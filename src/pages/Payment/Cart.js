import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CartProd from "../../components/Product/CartProd";
import ProductData from "../Products/ProductData";
import "./Cart.css";
import { Link } from "react-router-dom";

export const Cart = () => {
  const [subTotal, setSubTotal] = useState(0);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [deliveryOption, setDeliveryOption] = useState("livraison"); // Default to "Livraison"

  useEffect(() => {
    const calculateSubTotal = () => {
      let sum = 0;
      selectedProducts.forEach((product) => {
        sum += parseFloat(product.price) * product.quantity;
      });
      setSubTotal(sum.toFixed(2));
    };
    calculateSubTotal();
  }, [selectedProducts]);

  const handleIncrement = (index) => {
    setSelectedProducts((prevProducts) => {
      const updatedProducts = [...prevProducts];
      updatedProducts[index].quantity += 1;
      return updatedProducts;
    });
  };

  const handleDecrement = (index) => {
    setSelectedProducts((prevProducts) => {
      const updatedProducts = [...prevProducts];
      if (updatedProducts[index].quantity > 1) {
        updatedProducts[index].quantity -= 1;
      }
      return updatedProducts;
    });
  };

  useEffect(() => {
    // Select the first two products initially
    const initialSelectedProducts = ProductData.slice(0, 2).map((product) => ({
      ...product,
      quantity: 1,
    }));
    setSelectedProducts(initialSelectedProducts);
  }, []);

  const handleDeliveryOptionChange = (option) => {
    setDeliveryOption(option);
  };

  // Calculate total price including delivery fee
  const calculateTotalPrice = () => {
    let total = parseFloat(subTotal);
    if (deliveryOption === "livraison") {
      total += 7; // Add delivery fee
    }
    return total.toFixed(2);
  };

  return (
    <div className="app-container">
      <Navbar />
      <div className="content">
        <div className="accueilTitle poppins-semibold">Mon panier</div>
        <div className="contentcart">
          <div>
            {selectedProducts.map((product, index) => (
              <div key={index} className="product-link">
                <CartProd
                  imageSrc={product.imageSrc}
                  title={product.title}
                  price={product.price}
                  size={product.size}
                  quantity={product.quantity}
                  onIncrement={() => handleIncrement(index)}
                  onDecrement={() => handleDecrement(index)}
                />
              </div>
            ))}
          </div>

          <div className="TextContainer">
            <div className="textProd poppins-semibold">Récapitulons:</div>
            <div className="total1">
              <span className="Text  poppins-medium">Sous total :</span>
              <span className="Text poppins-medium">{`${subTotal}TND`}</span>
            </div>
            <div className="total1 poppins-medium">
              <label>
                <input
                  type="radio"
                  value="livraison"
                  checked={deliveryOption === "livraison"}
                  onChange={() => handleDeliveryOptionChange("livraison")}
                />
                Livraison
              </label>
              <div>7.00 TND</div>
            </div>
            <div className="total1 poppins-medium">
              <label>
                <input
                  type="radio"
                  value="clickCollect"
                  checked={deliveryOption === "clickCollect"}
                  onChange={() => handleDeliveryOptionChange("clickCollect")}
                />
                Click et collect
              </label>
              <div>0.00 TND</div>
            </div>
            <div className="total">
              <span className="Text poppins-semibold">Total : </span>
              <span className="Text poppins-semibold">{` ${calculateTotalPrice()} TND`}</span>
            </div>
            <div className="center">
              <Link
                to={
                  deliveryOption === "livraison"
                    ? "/cartebancaire"
                    : "/pointrelais"
                }
              >
                <button>Valider ma commande</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
