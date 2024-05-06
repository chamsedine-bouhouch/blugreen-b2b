import React, { useRef, useState } from "react";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import { BsPerson, BsHeart, BsCart } from "react-icons/bs";
import "../../Styles/MainCss.css";
import logoImage from "../../Images/blugreen-logo-white.png";

function Navbar() {
  const navRef = useRef();
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);
  const [showDropdown4, setShowDropdown4] = useState(false);

  const toggleDropdown1 = () => {
    setShowDropdown1(!showDropdown1);
  };

  const toggleDropdown2 = () => {
    setShowDropdown2(!showDropdown2);
  };

  const toggleDropdown3 = () => {
    setShowDropdown3(!showDropdown3);
  };

  const toggleDropdown4 = () => {
    setShowDropdown4(!showDropdown4);
  };

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
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
      <nav ref={navRef}>
        <div className="dropdown" onClick={toggleDropdown1}>
          <a>Découvrez</a>
          {showDropdown1 && (
            <div className="dropdown-content column">
              <a
                href="/discover"
                style={{
                  color: "#167378",
                  marginBottom: "10px",
                }}
              >
                Notre diagnostique
              </a>
              <a
                href="/Boxes"
                style={{
                  color: "#167378",
                }}
              >
                Nos boxes
              </a>
            </div>
          )}
        </div>
        <div className="dropdown" onClick={toggleDropdown2}>
          <a>Produits</a>
          {showDropdown2 && (
            <div className="dropdown-content column">
              <a
                href="#"
                style={{
                  color: "#167378",
                  marginBottom: "10px",
                }}
              >
                Visage
              </a>
              <a
                href="#"
                style={{
                  color: "#167378",
                  marginBottom: "10px",
                }}
              >
                Cheveux
              </a>
              <a
                href="#"
                style={{
                  color: "#167378",
                  marginBottom: "10px",
                }}
              >
                Corps
              </a>
              <a
                href="#"
                style={{
                  color: "#167378",
                  marginBottom: "10px",
                }}
              >
                Hygiéne
              </a>
              <a
                href="#"
                style={{
                  color: "#167378",
                  marginBottom: "10px",
                }}
              >
                Hommes
              </a>
              <a
                href="#"
                style={{
                  color: "#167378",
                  marginBottom: "10px",
                }}
              >
                Maman et bébés
              </a>
              <a
                href="#"
                style={{
                  color: "#167378",
                }}
              >
                Compléments alimentaires
              </a>
            </div>
          )}
        </div>
        <div className="dropdown" onClick={toggleDropdown3}>
          <a>Conseils d'experts</a>
          {showDropdown3 && (
            <div className="dropdown-content column">
              <a
                href="#"
                style={{
                  color: "#167378",
                  marginBottom: "10px",
                }}
              >
                Nos experts en santé
              </a>
              <a
                href="#"
                style={{
                  color: "#167378",
                }}
              >
                Nos coachs de vie
              </a>
            </div>
          )}
        </div>
        <div className="dropdown" onClick={toggleDropdown4}>
          <a>Communauté</a>
          {showDropdown4 && (
            <div className="dropdown-content column">
              <a
                href="#"
                style={{
                  color: "#167378",
                  marginBottom: "10px",
                }}
              >
                Blog
              </a>
              <a
                href="#"
                style={{
                  color: "#167378",
                  marginBottom: "10px",
                }}
              >
                Evènements
              </a>
              <a
                href="#"
                style={{
                  color: "#167378",
                }}
              >
                Associations
              </a>
            </div>
          )}
        </div>
        <div className="icons">
          <a href="/quizz" className="diagnostique-link">
            Faites votre diagnostique
          </a>
          <span className="icon-container1">
            <a>
              <BsPerson
                style={{
                  width: "20px",
                  height: "auto",
                }}
              />
            </a>
            <a>
              <BsHeart style={{ width: "18px", height: "auto" }} />
            </a>
            <a>
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
