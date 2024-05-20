import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Auth.css";
import ImageAuth from "../../Images/imageAuth3.png";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
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
            <div className="welcome-text2 poppins-semibold">Se connecter </div>
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="input-line">
                <input
                  type="text"
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
                  className="input-field"
                  placeholder="Mot de passe"
                  required
                />
              </div>

              <Link to="/resetpsd" className="forgot-password poppins-medium">
                Mot de passe oublié?
              </Link>
              <div className="button-container">
                <div className="login-button">
                  <Link to="/">
                    <button
                      type="submit"
                      className="btn btn-primary poppins-medium"
                      onClick={handleSubmit}
                    >
                      Se connecter
                    </button>
                  </Link>
                </div>
                <div className="create-account poppins-medium">
                  Vous n'avez pas de compte ?
                  <Link to="/register" className="link poppins-medium">
                    Créer un!
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

export default Login;
