import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import success from "../../Images/coche.png";

export const SuccessClick = () => {
  return (
    <div className="app-container1">
      <Navbar />
      <div className="content4">
        <div className="SuccessContainer poppins-semibold">
          <div className="success ">
            <img src={success} className="bankImage" alt="success" />
          </div>
          <div>Commande réservée</div>
          <div>
            Veuillez collecter votre commande à la Pharmacie el Moez - Menzah 1
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
