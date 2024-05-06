import React from "react";
import Navbar from "../src/components/Navbar/Navbar.js";
import Footer from "./components/Footer/Footer.js";
import "./App.css";
import diagnostiqueImage from "../src/Images/belle-femme-prenant-soin-elle-meme-maison.jpg";
import BoxeImage from "../src/Images/still-life-care-products.jpg";
import Expert from "../src/Images/woman-with-eye-patches-copy-space.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import product from "../src/Images/selfcare-product-bottle-with-flower.jpg";
import article from "../src/Images/beauty-portrait-ginger-woman-with-long-hair-posing-with-green-leaf.jpg";
import LeafIcon from "../src/Images/Icons/cil_leaf.png";
import Safety from "../src/Images/Icons/ant-design_safety-outlined.png";
import Conseil from "../src/Images/Icons/ic_outline-tips-and-updates.png";
import Clock from "../src/Images/Icons/bi_clock-history.png";
import Heart from "../src/Images/Icons/ant-design_heart-outlined.png";
import Collect from "../src/Images/Icons/carbon_delivery.png";
import Product from "./components/Product/Product.js";

function App() {
  const settings = {
    dots: true,
    customPaging: function (i, active) {
      return (
        <div
          style={{
            width: "20px",
            height: "20px",
            background: "gray",
            borderRadius: "50px",
            marginTop: "20px",
          }}
        ></div>
      );
    },
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
  };

  return (
    <div className="app-container">
      <Navbar />
      <div className="content">
        <Slider {...settings}>
          <div className="CarrouselContainer">
            <div className="DiagnosticContainer">
              <div className="DiagnosticText">
                <div className="DiagnosticTitle poppins-semibold ">
                  Diagnostic
                </div>
                <div className="DiagnosticDescription poppins-regular">
                  Découvrez des routines plus adaptées à vos besoins uniques
                </div>
                <button>Découvrir</button>
              </div>
              <img
                src={diagnostiqueImage}
                className="carousel-image"
                alt="Diagnostic"
              />
            </div>
          </div>
          <div className="CarrouselContainer">
            <div className="DiagnosticContainer">
              <div className="DiagnosticText">
                <div className="DiagnosticTitle poppins-semibold ">Boxes</div>
                <div className="DiagnosticDescription poppins-semibold">
                  Découvrez notre sélection de boxes sur-mesure.
                </div>
                <button>Découvrir</button>
              </div>
              <img
                src={BoxeImage}
                className="carousel-image"
                alt="Diagnostic"
              />
            </div>
          </div>
        </Slider>
        <div className="TextAcceuilContainer">
          <div className="DiagnosticTitle poppins-semibold">CLEAN & GREEN</div>
          <div className="AccueilDescription poppins-semibold-italic">
            "On est là pour vous conseiller par rapport à vos préoccupations et
            besoins, tout en respectant vos valeurs."
          </div>
        </div>
        <hr className="separator-line" />
        <div className="accueilTitle poppins-semibold">MOOD'S</div>
        <div className="MoodContainer">
          <div className="BoxContainer">
            <div className="box-image-container">
              <img src={BoxeImage} className="box-image" alt="Diagnostic" />
            </div>
            <div className="text-box-container">
              <div className=" poppins-semibold"> Box Nature</div>
              <div className=" poppins-medium"> NATUREL</div>
            </div>

            <div className=" text-box-container poppins-reguliar">
              Box Spa & détente
            </div>
          </div>
          <div className="SecondColumnContainer">
            <div className="ExpertContainer">
              <div className="expert-image-container">
                <img src={Expert} className="box-image" alt="Diagnostic" />
              </div>
              <div className="expert-text-container">
                <div className=" poppins-semibold">Acné, parlons boutons !</div>
                <div className=" poppins-semibold">
                  Dr. Mouna MZAH Dermatologue
                </div>
                <div className="ExpertDescription">
                  Comment prendre soin de votre peau
                </div>
              </div>
            </div>
            <div className="SmallContainer">
              <div className="ArticleContainer">
                <div className="article-image-container">
                  <img src={article} className="box-image" alt="Diagnostic" />
                </div>
                <div className="expert-text-container">
                  <div className="articleTitle poppins-semibold">
                    Préparer la peau pour l’hiver
                  </div>
                  <div className="articleDescription">
                    «Quand on change d’air, il faut changer de cosmétiques».
                  </div>
                </div>
              </div>

              <div className="ArticleContainer">
                <div className="article-image-container">
                  <img src={product} className="box-image" alt="Diagnostic" />
                </div>
                <div className="expert-text-container">
                  <div className="articleTitle poppins-semibold">
                    Préparer la peau pour l’hiver
                  </div>
                  <div className="articleDescription">
                    «Quand on change d’air, il faut changer de cosmétiques».
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="separator-line" />
        <div className="accueilTitle poppins-semibold">NOS ATOUTS</div>
        <div className="icons-container">
          <div className="icon-container">
            <img src={LeafIcon} className="icon" alt="Diagnostic" />
            <div className="iconTitle poppins-medium">Clean & Green</div>
            <div className="articleTitle poppins-regular">
              Marques et Produits sélectionnés sans allergènes notoires
            </div>
          </div>
          <div className="icon-container">
            <img src={Safety} className="icon" alt="Diagnostic" />
            <div className="iconTitle poppins-medium">Transparence</div>
            <div className="articleTitle poppins-regular">
              Les produits sont présentés avec des Ingrédients déchiffrés
            </div>
          </div>
          <div className="icon-container">
            <img src={Conseil} className="icon" alt="Diagnostic" />
            <div className="iconTitle poppins-medium">Conseil</div>
            <div className="articleTitle poppins-regular">
              Conseils personnalisés suivant votre demande
            </div>
          </div>
          <div className="icon-container">
            <img src={Clock} className="icon" alt="Diagnostic" />
            <div className="iconTitle poppins-medium">Routine</div>
            <div className="articleTitle poppins-regular">
              Routine adaptée à vos valeurs, besoins
            </div>
          </div>
          <div className="icon-container">
            <img src={Heart} className="icon" alt="Diagnostic" />
            <div className="iconTitle poppins-medium">Fidélité</div>
            <div className="articleTitle poppins-regular">
              Collectez des points de fidélité à chaque commande
            </div>
          </div>
          <div className="icon-container">
            <img src={Collect} className="icon" alt="Diagnostic" />
            <div className="iconTitle poppins-medium">Click & Collect</div>
            <div className="articleTitle poppins-regular">
              Livraison point de vente souhaité selon sa localisation
            </div>
          </div>
        </div>
        <div className="accueilTitle poppins-semibold">
          "Laissez le bio vous surprendre"
        </div>
        <hr className="separator-line" />
        <div className="accueilTitle poppins-semibold">
          Sélectionnés pour vous
        </div>
        <div className="prod-container">
          <Product
            imageSrc={product}
            title="Sérum cheveux"
            description="Soin capillaire hydratant et nourrissant pour des cheveux éclatants de santé et de brillance."
            price="128DT"
            quantity="500ML"
          />
          <Product
            imageSrc={product}
            title="Sérum cheveux"
            description="Soin capillaire hydratant et nourrissant pour des cheveux éclatants de santé et de brillance."
            price="128DT"
            quantity="500ML"
          />
          <Product
            imageSrc={product}
            title="Sérum cheveux"
            description="Soin capillaire hydratant et nourrissant pour des cheveux éclatants de santé et de brillance."
            price="128DT"
            quantity="500ML"
          />
          <Product
            imageSrc={product}
            title="Sérum cheveux"
            description="Soin capillaire hydratant et nourrissant pour des cheveux éclatants de santé et de brillance."
            price="128DT"
            quantity="500ML"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
