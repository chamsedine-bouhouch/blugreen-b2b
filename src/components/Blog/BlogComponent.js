import React from "react";
import "./BlogComponent.css";
const BlogComponent = ({ imageSrc, title, auteur, date, domaine }) => {
  return (
    <div className="eventContainer">
      <div className="topeventcontainer">
        <div className="event-image-container">
          <img src={imageSrc} className="Box-image" alt="blog" />
        </div>
        <div className="TextEvent">
          <div className="Blogauteur1 poppins-medium">{auteur}</div>
          <h6 className="Blogcategory poppins-medium">{date}</h6>
          <div className="eventdescription poppins-semibold">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default BlogComponent;
