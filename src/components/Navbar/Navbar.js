import React, { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsPerson, BsHeart, BsCart } from "react-icons/bs";
import "../../Styles/MainCss.css";
import logoImage from "../../Images/blugreen-logo-white.png";

function Navbar() {
  const navRef = useRef();
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);

  const toggleDropdown1 = () => {
    setShowDropdown1(!showDropdown1);
  };

  const toggleDropdown3 = () => {
    setShowDropdown3(!showDropdown3);
  };

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <a href="/  ">
        <img
          src={logoImage}
          alt="Logo"
          style={{
            width: "50px",
            height: "auto",
            marginLeft: "50px",
            marginRight: "300px",
          }}
        />
      </a>

      <nav ref={navRef}>
        <div className="dropdown" onClick={toggleDropdown1}>
          <a className="poppins-medium">Découvrez</a>
          {showDropdown1 && (
            <div className="dropdown-content column">
              <a
                href="/discover"
                style={{
                  color: "#167378",
                  marginBottom: "10px",
                }}
                className="poppins-regular"
              >
                Notre diagnostique
              </a>
              <a
                className="poppins-regular"
                href="/box"
                style={{
                  color: "#167378",
                }}
              >
                Nos boxes
              </a>
            </div>
          )}
        </div>
        <a href="/products" className="poppins-medium">
          Produits
        </a>
        <div className="dropdown" onClick={toggleDropdown3}>
          <a className="poppins-medium">Conseils d'experts</a>
          {showDropdown3 && (
            <div className="dropdown-content column">
              <a
                className="poppins-regular"
                href="/conseilexpert"
                style={{
                  color: "#167378",
                  marginBottom: "10px",
                }}
              >
                Nos experts en santé
              </a>
              <a
                className="poppins-regular"
                href="/conseilcoach"
                style={{
                  color: "#167378",
                }}
              >
                Nos coachs de vie
              </a>
            </div>
          )}
        </div>
        <a href="/events" className="poppins-medium">
          Evénements
        </a>
        <div className="icons">
          <a href="/quizz" className="diagnostique-link poppins-medium">
            Faites votre diagnostique
          </a>
          <span className="icon-container1">
            <a href="/register">
              <BsPerson
                style={{
                  width: "20px",
                  height: "auto",
                }}
              />
            </a>
            <a href="/profil">
              <BsHeart style={{ width: "18px", height: "auto" }} />
            </a>
            <a href="/cart">
              <BsCart
                style={{
                  width: "20px",
                  height: "auto",
                }}
              />
            </a>
          </span>
        </div>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>

      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
