import React, { useState } from "react";
import BoxComponent from "../../components/Box/Box";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./BoxePage.css";
import ReviewComponent from "../../components/Review/ReviewComponent";
import boxData from "./boxData";
import { Link } from "react-router-dom";
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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, boxData.length);

  const currentPageBoxData = boxData.slice(startIndex, endIndex);

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
        </div>

        <div className="BoxesContainer">
          {currentPageBoxData.map((box, index) => (
            <Link key={index} to={`/box/${index}`} className="product-link">
              <BoxComponent
                key={index}
                imageSrc={box.imageSrc}
                title={box.title}
                description={box.description}
                price={box.price}
              />
            </Link>
          ))}
        </div>
        {boxData.length > itemsPerPage && (
          <div className="pagination">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            >
              {currentPage - 1}
            </button>
            <span> {currentPage}</span>
            <button
              onClick={() =>
                setCurrentPage((prev) =>
                  Math.min(prev + 1, Math.ceil(boxData.length / itemsPerPage))
                )
              }
            >
              {currentPage + 1}
            </button>
          </div>
        )}
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
