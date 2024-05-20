import React, { useState } from "react";
import "./Profil.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

import { InfoPersonnelles } from "./InfoPersonnelles";
import { MonJournal } from "./MonJournal";
import { Commandes } from "./Commandes";
import { PointsFid } from "./PointsFid";
import { Parrainages } from "./Parrainages";
import { Favoris } from "./Favoris";

export const Profil = () => {
  const [activeTab, setActiveTab] = useState("infoPersonnel");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const renderContent = () => {
    switch (activeTab) {
      case "infoPersonnel":
        return (
          <div className="InfoContent">
            <InfoPersonnelles />
          </div>
        );

      case "monjournal":
        return (
          <div className="InfoContent">
            <MonJournal />
          </div>
        );
      case "mescommandes":
        return (
          <div className="InfoContent">
            <Commandes />
          </div>
        );
      case "ptfidelité":
        return (
          <div className="InfoContent">
            <PointsFid />
          </div>
        );
      case "parrainage":
        return (
          <div className="InfoContent">
            <Parrainages />
          </div>
        );
      case "favoris":
        return (
          <div className="InfoContent">
            <Favoris />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      <Navbar />
      <div className="content">
        <div className="contentprofil">
          <div className="ProfilTabbig">
            <div className="ProfilTab poppins-regular">
              <div
                className={`profil-tab ${
                  activeTab === "infoPersonnel" && "active"
                }`}
                onClick={() => handleTabClick("infoPersonnel")}
              >
                <h3 className="poppins-medium">Informations Personnelles</h3>
              </div>
              <div
                className={`profil-tab ${
                  activeTab === "monjournal" && "active"
                }`}
                onClick={() => handleTabClick("monjournal")}
              >
                <h3 className="poppins-medium">Mon journal</h3>
              </div>
              <div
                className={`profil-tab ${
                  activeTab === "mescommandes" && "active"
                }`}
                onClick={() => handleTabClick("mescommandes")}
              >
                <h3 className="poppins-medium">Mes commandes</h3>
              </div>
              <div
                className={`profil-tab ${
                  activeTab === "ptfidelité" && "active"
                }`}
                onClick={() => handleTabClick("ptfidelité")}
              >
                <h3 className="poppins-medium">Points de fidélité</h3>
              </div>
              <div
                className={`profil-tab ${
                  activeTab === "parrainage" && "active"
                }`}
                onClick={() => handleTabClick("parrainage")}
              >
                <h3 className="poppins-medium">Parrainages</h3>
              </div>
              <div
                className={`profil-tab ${activeTab === "favoris" && "active"}`}
                onClick={() => handleTabClick("favoris")}
              >
                <h3 className="poppins-medium">Mes favoris</h3>
              </div>
            </div>
          </div>

          <div className="content">{renderContent()}</div>
          <div className="vertical-separator"></div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
