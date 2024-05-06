import React from "react";
import PropTypes from "prop-types";
import "./ReviewComponent.css";

const ReviewComponent = ({ name, date, text }) => {
  return (
    <div className="ReviewContainer">
      <div className="ReviewTitle poppins-semibold">{name}</div>
      <div className="ReviewDate poppins-medium">{date}</div>
      <div className="ReviewText poppins-regular">{text}</div>
    </div>
  );
};

ReviewComponent.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ReviewComponent;
