import React from "react";
import "../../App.css";
import diagnostiqueImage from "../../Images/belle-femme-prenant-soin-elle-meme-maison.jpg";
import Besoins from "../../Images/Icons/besoins.png";
import Produits from "../../Images/Icons/produits.png";
import Boxes from "../../Images/Icons/boxes.png";
import Compatibilité from "../../Images/Icons/compatibilité.png";
import Ingrédients from "../../Images/Icons/ingrédient.png";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ReviewComponent from "../../components/Review/ReviewComponent";
const reviews = [
  {
    name: "Khawla Selmi",
    date: "06/05/2024",
    text: "Grace au diagnostic je sais maintenant quel est mon type de peau. Je la pensais mixte mais en fait elle est grasse.",
  },
  {
    name: "Khawla Selmi",
    date: "06/05/2024",
    text: "Grace au diagnostic je sais maintenant quel est mon type de peau. Je la pensais mixte mais en fait elle est grasse.",
  },
  {
    name: "Khawla Selmi",
    date: "06/05/2024",
    text: "Grace au diagnostic je sais maintenant quel est mon type de peau. Je la pensais mixte mais en fait elle est grasse.",
  },
  {
    name: "Khawla Selmi",
    date: "06/05/2024",
    text: "Grace au diagnostic je sais maintenant quel est mon type de peau. Je la pensais mixte mais en fait elle est grasse.",
  },
].slice(0, 3);

function Discover() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content">
        <div className="CarrouselContainer">
          <div className="DiagnosticContainer">
            <div className="DiagnosticText">
              <div className="DiagnosticTitle poppins-bold ">Diagnostic</div>
              <div className="DiagnosticDescription poppins-regular">
                Ce diagnostic vous permet de découvrir en quelques clics une
                routine personnalisée et adaptée en tenant compte de vos
                allergies, sensibilités et besoins spécifiques.
              </div>
              <button>Commencer mon diagnostic</button>
            </div>
            <img
              src={diagnostiqueImage}
              className="carousel-image"
              alt="Diagnostic"
            />
          </div>
        </div>
        <hr className="separator-line" />
        <div className="accueilTitle poppins-semibold">Comment ça marche? </div>
        <div className="IconsButton">
          <div className="icons-container">
            <div className="icon-container">
              <img src={Besoins} className="icon" alt="Diagnostic" />
              <div className="iconTitle poppins-medium">1.Besoins détectés</div>
            </div>
            <div className="icon-container">
              <img src={Ingrédients} className="icon" alt="Diagnostic" />
              <div className="iconTitle poppins-medium">
                2.Ingrédients déchiffrés
              </div>
            </div>
            <div className="icon-container">
              <img src={Compatibilité} className="icon" alt="Diagnostic" />
              <div className="iconTitle poppins-medium">
                3.Comptabilité vérifiée
              </div>
            </div>
            <div className="icon-container">
              <img src={Produits} className="icon" alt="Diagnostic" />
              <div className="iconTitle poppins-medium">4.Produits adaptés</div>
            </div>
            <div className="icon-container">
              <img src={Boxes} className="icon" alt="Diagnostic" />
              <div className="iconTitle poppins-medium">5.Boxes sur-mesure</div>
            </div>
          </div>

          <button>Commencer mon diagnostic</button>
        </div>

        <div className="prod-container">
          {reviews.map((review, index) => (
            <React.Fragment key={index}>
              <ReviewComponent
                name={review.name}
                date={review.date}
                text={review.text}
              />
              {index !== reviews.length - 1 && <hr className="separator-1" />}
            </React.Fragment>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Discover;
