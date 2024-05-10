import React from "react";

export const Speaker = ({ speakerImg, speakername }) => {
  return (
    <div className="Container-event">
      <div className="speaker-image-container">
        <img src={speakerImg} className="Box-image" alt="blog" />
      </div>

      <div className="speaker poppins-medium">{speakername}</div>
    </div>
  );
};
