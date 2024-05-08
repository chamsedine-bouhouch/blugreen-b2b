import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

export const ConseilsCoachs = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content">
        <div className="NosBoxes">
          <div className="TextContainer poppins-bold">
            <div className="BoxTITLE poppins-bold">
              Nos Coach Bien-être vous conseillent{" "}
            </div>

            <div className="BOXDescription poppins-semibold">
              L’expertise et le savoir-faire de nos Coach Bien-être sont à votre
              disposition pour vous accompagner
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
