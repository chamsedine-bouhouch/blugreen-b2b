import React from "react";
import { Link } from "react-router-dom";
import SecondProductComponent from "../../components/Product/SecondProductComponent";
import BoxComponent from "../../components/Box/Box";
import boxData from "../Discover/boxData";
import ProductData from "../Products/ProductData";
import Product from "../../components/Product/Product";
export const Commandes = () => {
  const commandeBoxes = boxData.slice(0, 2);
  const commandeProducts = ProductData.slice(0, 2);
  return (
    <div className="content-profil">
      <div className="accueilTitle poppins-semibold">Mes commandes</div>
      <div className="favoristitle poppins-semibold">
        Historique des boxes achetées
      </div>
      <div className="BoxesProfilContainer">
        {commandeBoxes.map((box, index) => (
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
      <div className="favoristitle poppins-semibold">
        {" "}
        Historique des produits achetées
      </div>
      <div className="BoxesProfilContainer">
        {commandeProducts.map((product, index) => (
          <Link key={index} to={`/product/${index}`} className="product-link">
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
    </div>
  );
};
