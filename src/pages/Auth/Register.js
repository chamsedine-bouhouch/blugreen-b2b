import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Auth.css";
import ImageAuth from "../../Images/imageAuth3.png";

const Register = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    password: "",
    codeParrainage: "",
  });

  const { nom, prenom, email, password, codeParrainage } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nom === "" || prenom === "" || email === "" || password === "") {
      alert("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    console.log(formData);
  };

  return (
    <div className="login-container">
      <div className="content-container">
        <div className="combined-row">
          <div className="left-col">
            <div className="welcome-text poppins-semibold">
              Bienvenue chez BluGreen
            </div>
            <img src={ImageAuth} className="ImageAuth" alt="Logo" />
          </div>
          <div className="right-col">
            <div className="welcome-text2 poppins-semibold">
              Créer un compte
            </div>

            <form className="login-form" onSubmit={handleSubmit}>
              <div className="input-line">
                <input
                  type="text"
                  name="nom"
                  value={nom}
                  onChange={handleChange}
                  className="input-field poppins-medium"
                  placeholder="Nom"
                  required
                />
              </div>
              <div className="input-line">
                <input
                  type="text"
                  name="prenom"
                  value={prenom}
                  onChange={handleChange}
                  className="input-field poppins-medium"
                  placeholder="Prénom"
                  required
                />
              </div>
              <div className="input-line">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  className="input-field poppins-medium"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="input-line">
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  className="input-field poppins-medium"
                  placeholder="Mot de passe"
                  required
                />
                <input
                  type="number"
                  name="codeParrainage"
                  value={codeParrainage}
                  onChange={handleChange}
                  className="input-field poppins-medium"
                  placeholder="Code de parrainage"
                />
              </div>

              <div className="button-container">
                <div className="login-button">
                  <Link to="/">
                    <button
                      type="submit"
                      className="btn btn-primary poppins-medium"
                      onClick={handleSubmit}
                    >
                      S'inscrire
                    </button>
                  </Link>
                </div>
                <div className="create-account poppins-medium">
                  Déjà membre?
                  <Link to="/login" className="link poppins-medium">
                    Se connecter
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
