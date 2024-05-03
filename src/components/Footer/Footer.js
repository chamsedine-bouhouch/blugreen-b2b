import React from "react";
import logoImage from "../../Images/blugreen-logo-white.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links_div1">
            <img
              src={logoImage}
              style={{
                width: "50px",
                height: "auto",
                marginLeft: "20px",
              }}
              alt="Logo"
            />
            <div className="newsletter">
              <h4>Abonnez vous à notre Newsletter</h4>
              <form>
                <input type="email" placeholder="Adresse Mail" />
                <button type="submit">OK</button>
              </form>
            </div>
          </div>
          <div className="sb_footer-links_div">
            <h4> A propos</h4>
            <a href="/#">Notre histoire</a>
            <a href="/#">Nos engagements</a>
            <a href="/#">Nous contacter</a>
          </div>
          <div className="sb_footer-links_div">
            <h4> Nos partenaires</h4>
            <a href="/#">Marques</a>
            <a href="/#">Experts</a>
            <a href="/#">Nos points relais</a>
          </div>
          <div className="sb_footer-links_div">
            <h4> Nos services</h4>
            <a href="/#">Diagnostique</a>
            <a href="/#">Boxes</a>
            <a href="/#">Click et collect</a>
          </div>
          <div className="sb_footer-links_div">
            <h4> Mon compte</h4>
            <a href="/#">Mon profil</a>
            <a href="/#">Mes points de fidélité</a>
            <a href="/#">Parrainage</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
