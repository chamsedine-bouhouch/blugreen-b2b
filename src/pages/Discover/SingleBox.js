import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BoxComponent from "../../components/Box/Box";
import boxData from "./boxData";
import ProductData from "../Products/ProductData";
import Product from "../../components/Product/Product";

const SingleBox = () => {
  const { BoxId } = useParams();
  const { productId } = useParams();

  const box = boxData[BoxId];
  const stockStatus = box.disponible > 0 ? "En stock" : "Rupture de stock";
  const [quantity, setQuantity] = useState(1);
  const handleAddToCart = () => {
    if (box.disponible === 0 || quantity > box.disponible) {
      alert("Le produit est en rupture de stock.");
      return;
    }
    if (quantity > box.disponible) {
      alert(
        "Désolé, la quantité demandée dépasse le stock disponible. Actuellement, il y a seulement " +
          box.disponible +
          " article(s) disponible(s)."
      );

      return;
    }
  };
  const similarProducts = ProductData.filter(
    (product) => product.category === box.category && productId !== BoxId
  ).slice(0, 4);

  const similarBox = boxData
    .filter((otherBox) => otherBox.category === box.category)
    .slice(0, 3);

  return (
    <div className="app-container">
      <Navbar />
      <div className="product-detail-container">
        <div className="product-image">
          <img src={box.imageSrc} alt={box.title} className="image-prod" />
        </div>
        <div className="product-details poppins-medium">
          <p>{stockStatus}</p>
          <div className="detail1 ">
            <h2>{box.title}</h2>
          </div>

          <p>{box.description}</p>

          <div className="detail2">
            <p> {box.price}</p>
            <div className="quantity-controls">
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
              />
            </div>
          </div>
          <div className="detail2">
            <button onClick={handleAddToCart}> Ajouter à mon panier</button>
          </div>
        </div>
      </div>
      <hr className="separator-line" />
      <div className="accueilTitle poppins-semibold">Dans ce box!</div>
      <div className="Produits-similaires">
        {similarProducts.map((similarProduct, index) => (
          <Link key={index} to={`/product/${index}`} className="product-link">
            <Product
              key={index}
              imageSrc={similarProduct.imageSrc}
              title={similarProduct.title}
              description={similarProduct.description}
              price={similarProduct.price}
              size={similarProduct.size}
            />
          </Link>
        ))}
      </div>

      <hr className="separator-line" />
      <div className="accueilTitle poppins-semibold">Boxes similaires</div>
      <div className="Produits-similaires">
        {similarBox.map((similarBox, index) => (
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
      <Footer />
    </div>
  );
};
SingleBox.propTypes = {
  boxData: PropTypes.array.isRequired,
  ProductData: PropTypes.array.isRequired,
};

export default SingleBox;
