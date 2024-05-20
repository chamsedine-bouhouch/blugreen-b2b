import React from "react";

export const PointsFid = () => {
  return (
    <div className="content-profil">
      <div className="accueilTitle poppins-semibold">
        Mes points de fidélité
      </div>
      <div className="ptfid1 poppins-medium-italic">
        Collectez et transformez des points de fidélités pour profiter de nos
        offres et réductions.
      </div>
      <div className="ptfid1 poppins-semibold">Mes points de fidélités</div>
      <div className="ptfid2 poppins-regular">
        Votre solde actuel est de 0 points fidélité ( 0,00 TND)
      </div>
      <div className="buttonpoint">
        <div className="ptfid2 poppins-regular">
          Le solde minimum requis pour transformer vos points fidélité n’est pas
          encore atteint
        </div>
        <button className="read-more-btn">
          Trasformer mes points de fidélité
        </button>
      </div>

      <div className="ptfid1 poppins-semibold">
        Fonctionnement des points fidélité
      </div>
      <div className="ptfid2 poppins-regular">
        - 1.000 TND (Hors taxes et hors frais de livraison) déponsé rapporte 01
        point de fidelité
      </div>
      <div className="ptfid2 poppins-regular">
        - 01 point de fidélité à une valeur de 0.05 TND (5%)
      </div>
      <div className="ptfid2 poppins-regular">
        - Le solde minimum pour échanger vos points et de 1000pt.
      </div>
      <div className="ptfid2 poppins-regular">
        - Dés que vous atteignez 1000 points de fidélité vous bénéficiez au
        moment de votre paiement de 50TND de réduction sur votre prochaine
        commande.
      </div>
      <div className="ptfid2 poppins-regular">
        - Vous pouvez décider de les utiliser ou de les conserver pour un
        prochain achat.
      </div>
    </div>
  );
};
