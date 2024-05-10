import React, { useState } from "react";

import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import "./Event.css";
import eventData from "./EventData";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Speaker } from "../../components/EventComponents/Speaker";

export const DetailEvent = () => {
  const { eventId } = useParams();
  const event = eventData[eventId];

  return (
    <div className="app-container">
      <Navbar />
      <div className="event-container ">
        <div className="event-details poppins-medium">
          <h2 className="event-title">{event.title}</h2>
          <p className="Blogcategory1"> {event.place}</p>
          <p className="Blogcategory1"> {event.heure}</p>

          <p className="event-description">{event.description}</p>
        </div>

        <div className="event-image">
          <img src={event.ImgSrc} alt={event.title} className="image-prod" />
        </div>
      </div>

      <hr className="separator-line" />
      <div className="accueilTitle poppins-semibold">Nos conférenciers</div>
      <div className="Speakers">
        {event.speakers.map((speakerName, index) => (
          <Speaker
            key={index}
            speakerImg={event.speakerImgSrc}
            speakername={speakerName}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};
DetailEvent.propTypes = {
  eventData: PropTypes.array.isRequired,
};
