import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import BlogData from "./BlogData";
import "./Conseils.css";
import BlogComponent from "../../components/Blog/BlogComponent";

export const ConseilsCoachs = () => {
  const [activeTab, setActiveTab] = useState("Bien-être");
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
          <div className="TextContainer1 poppins-bold">
            <div className="BoxTITLE poppins-bold">
              Nos Coach Bien-être vous conseillent
            </div>

            <div className="BOXDescription poppins-semibold">
              L’expertise et le savoir-faire de nos Coach Bien-être sont à votre
              disposition pour vous accompagner
            </div>
          </div>
        </div>

        <div className="blog-tabs poppins-medium">
          <div
            className={`product-tab ${activeTab === "Bien-être" && "active"}`}
            onClick={() => handleTabClick("Bien-être")}
          >
            <h3>Bien-être</h3>
          </div>
          <div
            className={`product-tab ${activeTab === "Méditation" && "active"}`}
            onClick={() => handleTabClick("Méditation")}
          >
            <h3>Méditation</h3>
          </div>
          <div
            className={`product-tab ${activeTab === "Motivation" && "active"}`}
            onClick={() => handleTabClick("Motivation")}
          >
            <h3>Motivation</h3>
          </div>
          <div
            className={`product-tab ${activeTab === "Yoga" && "active"}`}
            onClick={() => handleTabClick("Yoga")}
          >
            <h3>Yoga</h3>
          </div>
          <div
            className={`product-tab ${activeTab === "Sport" && "active"}`}
            onClick={() => handleTabClick("Sport")}
          >
            <h3>Sport</h3>
          </div>
          <div
            className={`product-tab ${activeTab === "Beauté" && "active"}`}
            onClick={() => handleTabClick("Beauté")}
          >
            <h3>Beauté</h3>
          </div>
        </div>
        <div className="Blog-content poppins-regular">
          {filteredBlog.map((blog) => (
            <div className="article1" key={blog.id}>
              <div className="BlogContainerImage">
                <img
                  src={blog.imageSrc}
                  className="image-prod"
                  alt={blog.Titre}
                />
              </div>
              <div className="blog">
                <div className="Blogtitre poppins-semibold">{blog.Titre}</div>
                <div className="Blogcontenu poppins-regular">
                  {blog.Contenu}
                </div>
                <a href="/blogdetail">Voir plus</a>
                <div className="Blogauteur poppins-medium">
                  Dr {blog.Auteur}
                </div>

                <div className="Blogcategory poppins-medium">
                  Publié le {blog.Date_de_publication}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};
