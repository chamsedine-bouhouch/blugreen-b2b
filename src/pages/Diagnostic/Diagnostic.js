import React, { useState } from "react";
import "./Diagnostic.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ProductData from "../Products/ProductData";
import { Link } from "react-router-dom";
import Product from "../../components/Product/Product";
import boxData from "../Discover/boxData";
import BoxComponent from "../../components/Box/Box";
import diagnostiqueImage from "../../Images/belle-femme-prenant-soin-elle-meme-maison.jpg";

export const Diagnostic = () => {
  const [activeTab, setActiveTab] = useState("visage");

  const getProductsByCategory = (category) => {
    return ProductData.filter((product) => product.category === category).slice(
      0,
      4
    );
  };

  const products = getProductsByCategory(activeTab);
  const getboxesByCategory = (category) => {
    return boxData.filter((box) => box.category === category).slice(0, 4);
  };

  const boxes = getboxesByCategory(activeTab);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const renderContent = () => {
    switch (activeTab) {
      case "visage":
        return (
          <div className="VisageContent">
            <div className="Conseilresult">
              <div className="ConseilresultText">
                <div className="ConseilresultTitle poppins-semibold">
                  Nos conseils pour visage:
                </div>
                <div className="ConseilresultDescription poppins-medium">
                  D’APRÈS CE QUE VOUS NOUS AVEZ CONFIÉ, nous vous conseillons :
                </div>
                <div className="ConseilresultConseil poppins-regular">
                  Evitez l’utilisation des savons pour le nettoyage de votre
                  visage et des soins parfumés. Utilisez plutôt des pains
                  dermatologiques appropriés aux peaux grasses à imperfections
                  Evitez de manger épicé
                </div>
              </div>
              <div className="BlogContainerImage">
                <img
                  src={diagnostiqueImage}
                  className="image-prod"
                  alt="Diagnostic"
                />
              </div>
            </div>

            <hr className="separator-line" />
            <div className="accueilTitle poppins-semibold">
              Produits adaptés
            </div>
            <div className="BoxesContainer">
              {products.map((product, index) => (
                <Link
                  key={index}
                  to={`/product/${index}`}
                  className="product-link"
                >
                  <Product
                    key={index}
                    imageSrc={product.imageSrc}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    size={product.size}
                  />
                </Link>
              ))}
            </div>
            <hr className="separator-line" />
            <div className="accueilTitle poppins-semibold">Boxes adaptés</div>
            <div className="BoxesContainer">
              {boxes.map((box, index) => (
                <Link key={index} to={`/box/${index}`} className="product-link">
                  <BoxComponent
                    key={index}
                    imageSrc={box.imageSrc}
                    title={box.title}
                    price={box.price}
                  />
                </Link>
              ))}
            </div>
          </div>
        );
      case "cheveux":
        return (
          <div className="CheveuxContent">
            <div className="Conseilresult">
              <div className="ConseilresultText">
                <div className="ConseilresultTitle poppins-semibold">
                  Nos conseils pour visage:
                </div>
                <div className="ConseilresultDescription poppins-medium">
                  D’APRÈS CE QUE VOUS NOUS AVEZ CONFIÉ, nous vous conseillons :
                </div>
                <div className="ConseilresultConseil poppins-regular">
                  Evitez l’utilisation des savons pour le nettoyage de votre
                  visage et des soins parfumés. Utilisez plutôt des pains
                  dermatologiques appropriés aux peaux grasses à imperfections
                  Evitez de manger épicé
                </div>
              </div>

              <div className="BlogContainerImage">
                <img
                  src={diagnostiqueImage}
                  className="image-prod"
                  alt="Diagnostic"
                />
              </div>
            </div>

            <hr className="separator-line" />
            <div className="accueilTitle poppins-semibold">
              Produits adaptés
            </div>
            <div className="BoxesContainer">
              {products.map((product, index) => (
                <Link
                  key={index}
                  to={`/product/${index}`}
                  className="product-link"
                >
                  <Product
                    key={index}
                    imageSrc={product.imageSrc}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    size={product.size}
                  />
                </Link>
              ))}
            </div>
            <hr className="separator-line" />
            <div className="accueilTitle poppins-semibold">Boxes adaptés</div>
            <div className="BoxesContainer">
              {boxes.map((box, index) => (
                <Link key={index} to={`/box/${index}`} className="product-link">
                  <BoxComponent
                    key={index}
                    imageSrc={box.imageSrc}
                    title={box.title}
                    price={box.price}
                  />
                </Link>
              ))}
            </div>
          </div>
        );
      case "corps":
        return (
          <div className="CorpsContent">
            <div className="Conseilresult">
              <div className="ConseilresultText">
                <div className="ConseilresultTitle poppins-semibold">
                  Nos conseils pour visage:
                </div>
                <div className="ConseilresultDescription poppins-medium">
                  D’APRÈS CE QUE VOUS NOUS AVEZ CONFIÉ, nous vous conseillons :
                </div>
                <div className="ConseilresultConseil poppins-regular">
                  Evitez l’utilisation des savons pour le nettoyage de votre
                  visage et des soins parfumés. Utilisez plutôt des pains
                  dermatologiques appropriés aux peaux grasses à imperfections
                  Evitez de manger épicé
                </div>
              </div>

              <div className="BlogContainerImage">
                <img
                  src={diagnostiqueImage}
                  className="image-prod"
                  alt="Diagnostic"
                />
              </div>
            </div>

            <hr className="separator-line" />
            <div className="accueilTitle poppins-semibold">
              Produits adaptés
            </div>
            <div className="BoxesContainer">
              {products.map((product, index) => (
                <Link
                  key={index}
                  to={`/product/${index}`}
                  className="product-link"
                >
                  <Product
                    key={index}
                    imageSrc={product.imageSrc}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    size={product.size}
                  />
                </Link>
              ))}
            </div>
            <hr className="separator-line" />
            <div className="accueilTitle poppins-semibold">Boxes adaptés</div>
            <div className="BoxesContainer">
              {boxes.map((box, index) => (
                <Link key={index} to={`/box/${index}`} className="product-link">
                  <BoxComponent
                    key={index}
                    imageSrc={box.imageSrc}
                    title={box.title}
                    price={box.price}
                  />
                </Link>
              ))}
            </div>
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
        <div className="DiagnoResultText">
          <div className="VotreResultat poppins-semibold"> Votre résultat</div>
          <div className="Resulttext poppins-semibold">
            D’APRÈS CE QUE VOUS NOUS AVEZ CONFIÉ, VOUS avez une : Peau très
            Grasse qui présente des imperfections, type points noirs et boutons
            incarnés
          </div>
          <div className="Resultdescription poppins-regular">
            La peau grasse correspond à un fonctionnement excessif des glandes
            sébacées, qui secrètent le sébum. Plusieurs situations peuvent être
            à l'origine d'une peau grasse : Un dérèglement hormonal notamment un
            excès d'hormones mâles, les androgènes, qui sont présents chez les
            hommes comme chez les femmes
          </div>
        </div>
        <hr className="separator-line" />

        <div className="category-result">
          <div className="blog-tabs poppins-medium">
            <div
              className={`product-tab ${activeTab === "visage" && "active"}`}
              onClick={() => handleTabClick("visage")}
            >
              <h3>Visage</h3>
            </div>
            <div
              className={`product-tab ${activeTab === "cheveux" && "active"}`}
              onClick={() => handleTabClick("cheveux")}
            >
              <h3>Cheveux</h3>
            </div>
            <div
              className={`product-tab ${activeTab === "corps" && "active"}`}
              onClick={() => handleTabClick("corps")}
            >
              <h3>Corps</h3>
            </div>
          </div>
        </div>
        {renderContent()}
      </div>
      <Footer />
    </div>
  );
};
