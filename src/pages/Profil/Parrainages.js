import React, { useState } from "react";

export const Parrainages = () => {
  const [mail, setMail] = useState("");
  const handleChange = (event) => {
    setMail(event.target.value);
  };

  return (
    <div className="content-profil">
      <div className="accueilTitle poppins-semibold">Parrainage</div>
      <div div className="ptfid1 poppins-semibold">
        Invitez vos amis à rejoindre notre communauté
      </div>
      <div className="ptfid2 poppins-regular">
        Ajouter le mail de (la/des) personne(s) que vous voulez parrainer, un
        lien avec votre code de parrain leurs sera envoyer par mail. vous
        recevez 50 points de fidélité, pour chaque proche inscrit.
      </div>

      <div className="input-line1">
        <input
          type="text"
          name="mail"
          value={mail}
          onChange={handleChange}
          className="input-field poppins-medium"
          placeholder="Adresse email"
          required
        />
      </div>
      <div className="buttonpoint">
        <button className="read-more-btn">Inviter à rejoindre</button>
      </div>
    </div>
  );
};
