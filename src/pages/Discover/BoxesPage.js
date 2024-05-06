import React from "react";
import BoxComponent from "../../components/Box/Box";
import product from "../../Images/selfcare-product-bottle-with-flower.jpg";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./BoxePage.css";
import ReviewComponent from "../../components/Review/ReviewComponent";
import boximage from "../../Images/front-view-argan-product-assortment.jpg";
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

const BoxesPage = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content">
        <div className="NosBoxes">
          <div className="TextContainer poppins-bold">
            <div className="BoxTITLE poppins-bold">Nos boxes </div>

            <div className="BOXDescription poppins-semibold">
              Decouvrez nos boxes pour que chaque bonne routine de soins reste
              simple, efficace, et cibler les différentes préoccupations.
              Retrouvez dans ces boxes tous les produits adaptés à vos besoins.
              Et pour découvrir le box adapté à vos besoins, nous vous invitons
              à réaliser notre diagnostic.
            </div>
          </div>
          <img src={boximage} className="box-image" alt="box" />
        </div>

        <div className="BoxesContainer">
          <BoxComponent
            imageSrc={product}
            title="Sérum cheveux"
            description="Soin capillaire hydratant et nourrissant pour des cheveux éclatants de santé et de brillance."
            price="128DT"
          />
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
};

export default BoxesPage;
