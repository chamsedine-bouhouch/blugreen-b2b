import React, { useState } from "react";
import eventsData from "./EventData";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { EventComponent } from "../../components/EventComponents/EventComponent";
import "./Event.css";
import { Link } from "react-router-dom";

export const Events = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, eventsData.length);

  const currentPageeventsData = eventsData.slice(startIndex, endIndex);

  const pageCount = Math.ceil(eventsData.length / itemsPerPage);

  return (
    <div className="app-container">
      <Navbar />
      <div className="content">
        <div className="NosBoxes">
          <div className="TextContainer1 poppins-bold">
            <div className="BoxTITLE poppins-bold">
              Explorez Nos Événements{" "}
            </div>

            <div className="BOXDescription poppins-semibold">
              Découvrez notre sélection d'événements conçus pour promouvoir la
              santé mentale, physique et émotionnelle. Rejoignez-nous pour des
              séances de yoga apaisantes, des ateliers de méditation guidée, des
              conférences sur la nutrition et bien plus encore.
            </div>
          </div>
        </div>

        <hr className="separator-line" />
        <div className="accueilTitle poppins-semibold">Évènements à venir</div>
        <div className="dataevent">
          {currentPageeventsData.map((event, index) => (
            <Link key={index} to={`/event/${index}`} className="product-link">
              <EventComponent
                key={index}
                day={event.date[0]}
                month={event.date[1]}
                imageSrc={event.ImgSrc}
                description={event.description}
                title={event.title}
                adresse={event.place}
                heure={event.heure}
              />
            </Link>
          ))}
        </div>

        {pageCount > 1 && (
          <div className="pagination">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
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

      <Footer />
    </div>
  );
};
