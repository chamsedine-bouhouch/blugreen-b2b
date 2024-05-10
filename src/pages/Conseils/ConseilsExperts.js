import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import BlogData from "./BlogData";
import "./Conseils.css";
import BlogComponent from "../../components/Blog/BlogComponent";

export const ConseilsExperts = () => {
  const [activeTab, setActiveTab] = useState("Dermatologues");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const getRandomBlog = () => {
    const filteredBlogs = BlogData.filter((blog) => blog.Domaine === activeTab);
    const randomIndex = Math.floor(Math.random() * filteredBlogs.length);
    return filteredBlogs[randomIndex];
  };

  const randomBlog = getRandomBlog();
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
        <div className="blog-tabs poppins-medium">
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
          <div className="article1">
            <img
              src={randomBlog.imageSrc}
              className="carousel-image"
              alt={randomBlog.Titre}
            />
            <div className="blog1">
              <div className="Blogtitre poppins-semibold">
                {randomBlog.Titre}
              </div>

              <div className="Blogcontenu poppins-regular">
                {randomBlog.Contenu}
              </div>
              <a href="/link-to-full-article">Voir plus</a>
              <div className="Blogauteur poppins-medium">
                Dr {randomBlog.Auteur}
              </div>
              <div className="Blogcategory poppins-medium">
                {randomBlog.Categorie}
              </div>
              <div className="Blogcategory poppins-medium">
                Publié le {randomBlog.Date_de_publication}
              </div>
            </div>
          </div>
        </div>
        <div className="Box-content poppins-regular">
          {filteredBlog.map((Blog, index) => (
            <div key={index} className="article">
              <BlogComponent
                imageSrc={Blog.imageSrc}
                title={Blog.Titre}
                contenu={Blog.Contenu}
                auteur={Blog.Auteur}
                domaine={Blog.Domaine}
                date={Blog.Date_de_publication}
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};
