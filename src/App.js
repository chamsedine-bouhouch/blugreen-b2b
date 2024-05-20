import React from "react";
import Navbar from "../src/components/Navbar/Navbar.js";
import Footer from "./components/Footer/Footer.js";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./App.css";
import BoxeImage from "../src/Images/still-life-care-products.jpg";
import Expert from "../src/Images/woman-with-eye-patches-copy-space.jpg";

import product from "../src/Images/selfcare-product-bottle-with-flower.jpg";
import article from "../src/Images/beauty-portrait-ginger-woman-with-long-hair-posing-with-green-leaf.jpg";
import LeafIcon from "../src/Images/Icons/cil_leaf.png";
import Safety from "../src/Images/Icons/ant-design_safety-outlined.png";
import Conseil from "../src/Images/Icons/ic_outline-tips-and-updates.png";
import Clock from "../src/Images/Icons/bi_clock-history.png";
import Heart from "../src/Images/Icons/ant-design_heart-outlined.png";
import Collect from "../src/Images/Icons/carbon_delivery.png";
import Product from "./components/Product/Product.js";
import expertData from "./ExpertData.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <div className=" diagnostique-background">
        <div className="DiagnosticContainer">
          <div className="DiagnosticText">
            <div className="DiagnosticTitle poppins-semibold ">
              Transformez Votre Peau Transformez Votre Vie{" "}
            </div>
            <div className="DiagnosticDescription poppins-regular">
              La science avancée des soins pour une peau visiblement plus saine
              et plus belle{" "}
            </div>
            <button>Découvrir</button>
          </div>
        </div>
      </div>

      <div className="content">
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
          <div className="BoxContainer1">
            <div className="box-image-container">
              <img src={BoxeImage} className="box-image" alt="Diagnostic" />
            </div>
            <div className="text-box-container">
              <div className=" poppins-semibold">Acné, parlons boutons !</div>
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

        <hr className="separator-line" />
        <div className="accueilTitle1 poppins-semibold">
          Peu importe votre type de peau vous trouverez le meilleur produit que
          vous cherchez
        </div>

        <div className="CombinationContainer">
          <div className="CombinationSmall">
            <div className="combinationsmall-imageContainer">
              <img src={product} className="box-image" alt="Diagnostic" />
            </div>
            <div class="image-textcombi poppins-semibold">Peau normale</div>
          </div>

          <div className="CombinationBigContainer">
            <div className="CombinationBig">
              <div className="CombinationSmall">
                <div className="combinationsmall1-imageContainer">
                  <img src={product} className="box-image" alt="Diagnostic" />
                </div>

                <div class="image-textcombi poppins-semibold">Peau séche</div>
              </div>
              <div className="Combinationbiigg">
                <div className="combinationbig-imageContainer">
                  <img src={product} className="box-image" alt="Diagnostic" />
                </div>
                <div>
                  <div className="poppins-semibold bigCombititle">
                    Peau grasse
                  </div>
                  <div className="poppins-medium bigcombitext">
                    La peau grasse produit un excès de sébum, donnant un aspect
                    brillant et favorisant l’apparition de boutons.
                  </div>
                </div>
              </div>
            </div>
            <div className="CombinationBig">
              <div className="Combinationbiigg ">
                <div className="combinationbig-imageContainer">
                  <img src={product} className="box-image" alt="Diagnostic" />
                </div>
                <div>
                  <div className="poppins-semibold bigCombititle">
                    Peau mixte{" "}
                  </div>
                  <div className="poppins-medium bigcombitext">
                    La peau mixte est grasse dans la zone T et normale à sèche
                    sur les joues.
                  </div>
                </div>
              </div>
              <div className="CombinationSmall">
                <div className="combinationsmall1-imageContainer">
                  <img src={product} className="box-image" alt="Diagnostic" />
                </div>

                <div class="image-textcombi poppins-semibold">
                  Peau sensible
                </div>
              </div>
            </div>
          </div>

          <div className="CombinationSmall">
            <div className="combinationsmall-imageContainer">
              <img src={product} className="box-image" alt="Diagnostic" />
            </div>
            <div class="image-textcombi poppins-semibold">Peau acnéique</div>
          </div>
        </div>
        <hr className="separator-line" />
        <div className="accueilTitle poppins-semibold">
          Vaste selection de produits
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
        <hr className="separator-line" />
        <div className="accueilTitle poppins-semibold">Nos experts</div>
        <div className="expertlandingpage">
          {expertData.map((expert, index) => (
            <div className="expertttext" key={index}>
              <div className="expertsimagecontainer">
                <img
                  src={expert.imageSrc}
                  className="expertsimage"
                  alt="expert"
                />
              </div>
              <div className="expertttext">
                <div className="expettname poppins-medium">{expert.name}</div>
                <div className="experttdomaine poppins-regular">
                  {expert.domain}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
