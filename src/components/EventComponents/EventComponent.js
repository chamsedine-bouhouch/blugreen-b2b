import React from "react";
import "./Event.css";

export const EventComponent = ({
  day,
  month,
  imageSrc,
  description,
  title,
  place,
  adresse,
  heure,
}) => {
  return (
    <div className="eventContainer">
      <div className="topeventcontainer">
        <div className="dateevent  poppins-semibold">
          <div>{day}</div>
          <div>{month}</div>
        </div>

        <div className="event-image-container">
          <img src={imageSrc} className="Box-image" alt="blog" />
        </div>
      </div>

      <div className="TextEvent">
        <div className="eventtitle poppins-semibold">{title}</div>
        <div className="Blogcategory1 poppins-medium">{adresse}</div>
        <div className="Blogcategory1 poppins-medium">{heure}</div>

        <div className="eventdescription poppins-regular">{description}</div>
      </div>
    </div>
  );
};
