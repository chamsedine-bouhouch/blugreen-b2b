import React from "react";
import "../../App.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ReviewComponent from "../../components/Review/ReviewComponent";
import StepperComponent from "./Stepper";
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

      <div className=" diagnostique-background">
        <div className="DiagnosticContainer">
          <div className="DiagnosticText">
            <div className="DiagnosticTitle poppins-semibold ">
              Résultat personnalisé
            </div>
            <div className="DiagnosticDescription poppins-regular">
              Ce diagnostic vous permet de découvrir en quelques clics une
              routine personnalisée et adaptée en tenant compte de vos
              allergies, sensibilités et besoins spécifiques.
            </div>
            <button>Commencer mon diagnostic</button>
          </div>
        </div>
      </div>

      <div className="content">
        <hr className="separator-line" />
        <div className="accueilTitle poppins-semibold">Comment ça marche? </div>
        <div className="IconsButton">
          <StepperComponent />
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
