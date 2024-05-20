import React from "react";
import { Link } from "react-router-dom";
import SecondProductComponent from "../../components/Product/SecondProductComponent";
import BoxComponent from "../../components/Box/Box";
import boxData from "../Discover/boxData";
import ProductData from "../Products/ProductData";
import Product from "../../components/Product/Product";

export const Favoris = () => {
  const favoriteBoxes = boxData.slice(0, 3);
  const favoriteProducts = ProductData.slice(0, 2);
  return (
    <div className="content-profil">
      <div className="accueilTitle poppins-semibold">Mes favoris</div>

      <div className="favoristitle poppins-semibold">Mes boxes favoris</div>
      <div className="BoxesProfilContainer">
        {favoriteBoxes.map((box, index) => (
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
      <div className="favoristitle poppins-semibold">Mes produits favoris</div>
      <div className="BoxesProfilContainer">
        {favoriteProducts.map((product, index) => (
          <Link key={index} to={`/product/${index}`} className="product-link">
            <Product
              key={index}
              imageSrc={product.imageSrc}
              title={product.title}
              price={product.price}
              size={product.size}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
