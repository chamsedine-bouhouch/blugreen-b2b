import React from "react";
import "./BlogComponent.css";
const BlogComponent = ({ imageSrc, title, auteur, contenu, date, domaine }) => {
  const truncatedContent = (content) => {
    const rows = content.split("\n");
    if (rows.length > 3) {
      return rows.slice(0, 3).join("\n");
    }
    return content;
  };

  return (
    <div className="Container">
      <div className="BoxContainer">
        <div className="Blog-image-container">
          <img src={imageSrc} className="Box-image" alt="blog" />
        </div>
        <div className="Blog-text-container">
          <div className="Blogtitre1 poppins-semibold">{title}</div>
          <div className="truncated-content poppins-medium">
            {truncatedContent(contenu)}
          </div>
          <div className="Blogauteur1">{auteur}</div>
          <div className="Blogcategory1">{domaine}</div>
          <div className="Blogcategory1">{date}</div>
        </div>

        <button> Découvrir</button>
      </div>
    </div>
  );
};

export default BlogComponent;
