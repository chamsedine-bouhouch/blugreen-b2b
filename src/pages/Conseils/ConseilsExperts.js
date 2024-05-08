import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import BlogData from "./BlogData";

export const ConseilsExperts = () => {
  const [activeTab, setActiveTab] = useState("Dermatologues");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const filteredBlog = BlogData.filter((Blog) => Blog.Domaine === activeTab);
  return (
    <div className="app-container">
      <Navbar />
      <div className="content">
        <div className="NosBoxes">
          <div className="TextContainer poppins-bold">
            <div className="BoxTITLE poppins-bold">
              Nos experts santé vous conseillent{" "}
            </div>

            <div className="BOXDescription poppins-semibold">
              L’expertise et le savoir-faire de nos experts santé sont à votre
              disposition pour vous accompagner!
            </div>
          </div>
        </div>
        <div className="product-tabs poppins-medium">
          <div
            className={`product-tab ${
              activeTab === "Dermatologues" && "active"
            }`}
            onClick={() => handleTabClick("Dermatologues")}
          >
            <h3>Dermatologues</h3>
          </div>
          <div
            className={`product-tab ${
              activeTab === "Allergologues" && "active"
            }`}
            onClick={() => handleTabClick("Allergologue")}
          >
            <h3>Allergologues</h3>
          </div>
          <div
            className={`product-tab ${
              activeTab === "Nutritionnistes" && "active"
            }`}
            onClick={() => handleTabClick("Nutritionnistes")}
          >
            <h3>Nutritionnistes</h3>
          </div>
          <div
            className={`product-tab ${activeTab === "Pédiatres" && "active"}`}
            onClick={() => handleTabClick("Pédiatres")}
          >
            <h3>Pédiatres</h3>
          </div>
          <div
            className={`product-tab ${
              activeTab === "Gynécologues" && "active"
            }`}
            onClick={() => handleTabClick("Gynécologues")}
          >
            <h3>Gynécologues</h3>
          </div>
        </div>
        <div className="product-content poppins-regular">
          {filteredBlog.map((Blog, index) => (
            <div key={index} className="article">
              <h2>{Blog.Titre}</h2>
              <p>{Blog.Contenu}</p>
              {/* Render other details like author, date, etc. */}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};
