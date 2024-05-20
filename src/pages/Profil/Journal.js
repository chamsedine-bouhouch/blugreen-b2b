import React from "react";
import JournalImg from "../../Images/event.jpg";
export const Journal = () => {
  return (
    <div className="JournalComponent">
      <div>
        <img src={JournalImg} className="journal-image" alt="Diagnostic" />
      </div>
      <div className="journaltext">
        <div className="journaltitle poppins-medium">
          Votre résultat du 02/01/2022
        </div>
        <div className="journaldescription  poppins-regular">
          D'aprés ce que vous nous avez confié, Vous avez une : Peau très Grasse
          qui présente des imperfections, type points noirs et boutons incarnés
        </div>
        <button className="read-more-btn">Tout lire</button>
      </div>
    </div>
  );
};
