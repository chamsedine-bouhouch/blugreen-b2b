import React from "react";
import "./Conseils.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

export const SingleBlog = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className=" Blog-background"></div>
      <div className="content2 ">
        {" "}
        <div className="accueilTitle poppins-semibold">
          Les Types de Peau : Comprendre et Prendre Soin de Votre Épiderme
        </div>
        <div className="SingleBlogSection">
          <div className="SectionBlogTitle poppins-medium">Introduction</div>
          <div className="SectionBlogText poppins-regular">
            La peau est le plus grand organe du corps humain et joue un rôle
            essentiel en nous protégeant des agressions extérieures, en régulant
            la température corporelle et en nous permettant de ressentir
            diverses sensations. Cependant, chaque personne a un type de peau
            unique, ce qui signifie que les soins de la peau doivent être
            adaptés individuellement. Connaître son type de peau est donc
            crucial pour choisir les bons produits et maintenir une peau saine.
            Les principaux types de peau sont : normale, sèche, grasse, mixte et
            sensible.
          </div>
          <div className="SectionBlogImage"></div>
        </div>
        <div className="SingleBlogSection">
          <div className="SectionBlogTitle poppins-medium">Peau Normale</div>
          <div className="SectionBlogText  poppins-regular">
            Caractéristiques La peau normale est bien équilibrée, ni trop grasse
            ni trop sèche. Elle se caractérise par une texture douce et lisse,
            des pores fins, et une apparence uniforme. La peau normale est
            rarement sujette aux imperfections et réagit bien aux changements
            climatiques. Soins Pour maintenir une peau normale en bonne santé,
            il est conseillé d'utiliser des produits doux et hydratants. Une
            routine de soins de base incluant un nettoyant doux, un hydratant
            léger, et une protection solaire est généralement suffisante.
          </div>
          <div className="SectionBlogImage"></div>
        </div>
        <div className="SingleBlogSection">
          <div className="SectionBlogTitle poppins-medium">Peau Sèche</div>
          <div className="SectionBlogText poppins-regular">
            Caractéristiques La peau sèche produit moins de sébum que la
            normale, ce qui entraîne un manque de lipides nécessaires pour
            retenir l'humidité et créer une barrière protectrice efficace. Elle
            peut paraître terne, rugueuse et est souvent sujette aux
            desquamations et aux sensations de tiraillement. Soins Les soins
            pour la peau sèche doivent se concentrer sur l'hydratation et la
            protection. Utilisez des nettoyants doux et sans savon, et appliquez
            des crèmes hydratantes riches et nourrissantes. Les ingrédients
            comme l'acide hyaluronique et la glycérine sont particulièrement
            bénéfiques pour attirer et retenir l'humidité.
          </div>
          <div className="SectionBlogImage"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
