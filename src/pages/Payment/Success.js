import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import success from "../../Images/coche.png";

export const Success = () => {
  return (
    <div className="app-container1">
      <Navbar />
      <div className="content4">
        <div className="SuccessContainer poppins-semibold">
          <div className="success ">
            <img src={success} className="bankImage" alt="success" />
          </div>
          <div> Votre payment a été effectué avec succés!</div>
          <div>Vous allez etre livré dans 3 jours</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
