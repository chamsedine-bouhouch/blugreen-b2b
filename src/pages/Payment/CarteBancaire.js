import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import Visa from "../../Images/visa.png";
import MasterCard from "../../Images/mastercard.png";

export const CarteBancaire = () => {
  const [deliveryOption, setDeliveryOption] = useState("livraison");
  const [paymentMethod, setPaymentMethod] = useState("visa");

  const handleDeliveryOptionChange = (option) => {
    setDeliveryOption(option);
  };
  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  return (
    <div className="app-container">
      <Navbar />
      <div className="accueilTitle2 poppins-semibold">Méthode de paiement</div>
      <div className="bankMethod">
        <div className="Bank">
          <label htmlFor="mastercard">
            <img src={MasterCard} className="bankImage" alt="MasterCard" />
          </label>
          <input
            type="radio"
            id="mastercard"
            name="paymentMethod"
            value="mastercard"
            checked={paymentMethod === "mastercard"}
            onChange={() => handlePaymentMethodChange("mastercard")}
          />
        </div>
        <div className="Bank">
          <label htmlFor="visa">
            <img src={Visa} className="bankImage" alt="Visa" />
          </label>
          <input
            type="radio"
            id="visa"
            name="paymentMethod"
            value="visa"
            checked={paymentMethod === "visa"}
            onChange={() => handlePaymentMethodChange("visa")}
          />
        </div>
      </div>

      <div className="content1">
        <form className="carte">
          <div className="product-link">
            <div className="input-line1">
              <input
                type="text"
                name="nom"
                className="input-field poppins-medium"
                placeholder="Nom sur la carte"
                required
              />
            </div>
            <div className="input-line1">
              <input
                type="email"
                name="email"
                className="input-field poppins-medium"
                placeholder="E-mail"
                required
              />
            </div>
            <div className="input-line1">
              <input
                type="number"
                name="numero"
                className="input-field poppins-medium"
                placeholder="Numéro de la carte"
                required
              />
            </div>
            <div className="input-line1">
              <input
                type="cvc"
                name="cvc"
                className="input-field poppins-medium"
                placeholder="CVC"
                required
              />
            </div>
            <div className="input-line1">
              <input
                type="date"
                name="mois"
                className="input-field poppins-medium"
                placeholder="Expire le "
                required
              />
            </div>
          </div>
        </form>
        <div className="TextContainer">
          <div className="textProd poppins-semibold">Récapitulons:</div>
          <div className="total1">
            <span className="Text poppins-medium">Sous total :</span>
            <span className="Text poppins-medium">215TND</span>
          </div>
          <div className="total1 poppins-medium">
            <label>
              <input
                type="radio"
                value="livraison"
                checked={deliveryOption === "livraison"}
                onChange={() => handleDeliveryOptionChange("livraison")}
                disabled={deliveryOption === "clickCollect"}
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
                disabled={deliveryOption === "livraison"}
              />
              Click et collect
            </label>
            <div>0.00 TND</div>
          </div>
          <div className="total">
            <span className="Text poppins-semibold">Total : </span>
            <span className="Text poppins-semibold">219 TND</span>
          </div>
          <div className="center">
            <Link to="/success">
              <button>Payer</button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
