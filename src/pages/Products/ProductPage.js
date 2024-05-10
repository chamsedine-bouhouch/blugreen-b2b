import React, { useState } from "react";
import "./ProductPage.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SecondProductComponent from "../../components/Product/SecondProductComponent";
import { Link } from "react-router-dom";
import ProductData from "./ProductData";

export const ProductPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("visage");

  const itemsPerPage = 9;

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const filteredProductData = ProductData.filter(
    (product) => product.category === selectedCategory
  );

  const uniqueCategories = [
    ...new Set(ProductData.map((product) => product.category)),
  ];

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(
    startIndex + itemsPerPage,
    filteredProductData.length
  );

  const currentPageProductData = filteredProductData.slice(
    startIndex,
    endIndex
  );

  const pageCount = Math.ceil(filteredProductData.length / itemsPerPage);
  return (
    <div className="app-container">
      <Navbar />
      <div className="content">
        <div className="Productcontent">
          <div className="filter-container">
            <div className="filter-group">
              <h3 className="poppins-semibold">Produits:</h3>
              <label className="poppins-medium">
                <input
                  type="checkbox"
                  name="products"
                  value="bio"
                  className="styled-checkbox"
                />
                Bio
              </label>
              <label className="poppins-medium">
                <input
                  type="checkbox"
                  name="products"
                  value="natural"
                  className="styled-checkbox"
                />
                Naturel
              </label>
              <label className="poppins-medium">
                <input
                  type="checkbox"
                  name="products"
                  value="cruelty-free"
                  className="styled-checkbox"
                />
                Ecologique{" "}
              </label>
            </div>

            <div className="filter-group">
              <h3 className="poppins-semibold">Destinés pour:</h3>
              <label className="poppins-medium">
                <input
                  type="checkbox"
                  name="target"
                  value="women"
                  className="styled-checkbox"
                />
                Femmes
              </label>
              <label className="poppins-medium">
                <input
                  type="checkbox"
                  name="target"
                  value="men"
                  className="styled-checkbox"
                />
                Hommes
              </label>
              <label className="poppins-medium">
                <input
                  type="checkbox"
                  name="target"
                  value="men"
                  className="styled-checkbox"
                />
                Peau mixte
              </label>
              <label className="poppins-medium">
                <input type="checkbox" name="target" value="men" />
                Peau grasse
              </label>
            </div>
          </div>

          <div className="ProddContainer">
            <div className="category-row">
              {uniqueCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={selectedCategory === category ? "active" : ""}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="BoxesContainer">
              {currentPageProductData.map((product, index) => (
                <Link
                  key={index}
                  to={`/product/${index}`}
                  className="product-link"
                >
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

            {pageCount > 1 && (
              <div className="pagination">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                >
                  {currentPage - 1}
                </button>
                <span> {currentPage}</span>
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, pageCount))
                  }
                  disabled={currentPage === pageCount}
                >
                  {currentPage + 1}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
