import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import "./ProductPage.css";

import ProductData from "./ProductData";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SecondProductComponent from "../../components/Product/SecondProductComponent";

const SingleProduct = () => {
  const { productId } = useParams();
  const product = ProductData[productId];
  const stockStatus = product.disponible > 0 ? "En stock" : "Rupture de stock";
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleAddToCart = () => {
    if (product.disponible === 0 || quantity > product.disponible) {
      alert("Le produit est en rupture de stock.");
      return;
    }
    if (quantity > product.disponible) {
      alert(
        "Désolé, la quantité demandée dépasse le stock disponible. Actuellement, il y a seulement " +
          product.disponible +
          " article(s) disponible(s)."
      );

      return;
    }
  };
  const similarProducts = ProductData.filter(
    (prod) => prod.category === product.category
  ).slice(0, 4);
  return (
    <div className="app-container">
      <Navbar />
      <div className="product-detail-container">
        <div className="product-image">
          <img
            src={product.imageSrc}
            alt={product.title}
            className="image-prod"
          />
        </div>
        <div className="product-details poppins-medium">
          <div className="detail1 ">
            <h2>{product.title}</h2>
            <p>{stockStatus}</p>
          </div>

          <p>{product.description}</p>

          <div className="detail2">
            <p> {product.price}</p>
            <p> {product.size}</p>
          </div>

          <div className="detail2">
            <div className="quantity-controls">
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
              />
            </div>
            <button onClick={handleAddToCart}> Ajouter à mon panier</button>
          </div>
        </div>
      </div>
      <div className="product-tabs poppins-medium">
        <div
          className={`product-tab ${activeTab === "description" && "active"}`}
          onClick={() => handleTabClick("description")}
        >
          <h3>Description</h3>
        </div>
        <div
          className={`product-tab ${activeTab === "utilisation" && "active"}`}
          onClick={() => handleTabClick("utilisation")}
        >
          <h3>Conseils</h3>
        </div>
        <div
          className={`product-tab ${activeTab === "composition" && "active"}`}
          onClick={() => handleTabClick("composition")}
        >
          <h3>Composition</h3>
        </div>
        <div
          className={`product-tab ${activeTab === "ingredients" && "active"}`}
          onClick={() => handleTabClick("ingredients")}
        >
          <h3>Ingrédients</h3>
        </div>
      </div>
      <div className="product-content poppins-regular">
        {activeTab === "description" && <p>{product.details}</p>}
        {activeTab === "utilisation" && <p>{product.conseilUtilisation}</p>}
        {activeTab === "composition" && <p>{product.composition}</p>}
        {activeTab === "ingredients" && (
          <div className="ingredient-cards">
            {product.ingredients.map((ingredient, index) => (
              <div
                className="ingredient-card"
                key={index}
                style={{ backgroundColor: ingredient.color }}
              >
                {ingredient.name}
              </div>
            ))}
          </div>
        )}
      </div>

      <hr className="separator-line" />
      <div className="accueilTitle poppins-semibold">Produits similaires</div>
      <div className="Produits-similaires">
        {similarProducts.map((similarProduct, index) => (
          <Link key={index} to={`/product/${index}`} className="product-link">
            <SecondProductComponent
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
      <Footer />
    </div>
  );
};
SingleProduct.propTypes = {
  ProductData: PropTypes.array.isRequired,
};
export default SingleProduct;
