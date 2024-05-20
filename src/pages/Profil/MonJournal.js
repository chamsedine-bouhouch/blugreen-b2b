import React from "react";
import { Journal } from "./Journal";

export const MonJournal = () => {
  return (
    <div className="content-profil">
      <div className="accueilTitle poppins-semibold">Mon journal</div>
      <div className="journalcontainer">
        <Journal />
        <Journal /> <Journal /> <Journal />
      </div>
    </div>
  );
};
