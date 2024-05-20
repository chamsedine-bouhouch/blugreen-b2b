import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Auth.css";
import ImageAuth from "../../Images/imageAuth3.png";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "") {
      alert("Veuillez saisir votre adresse email.");
      return;
    }

    console.log("Email:", email);
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
              Réinitialiser votre mot de passe
            </div>

            <div className="msg-text poppins-medium">
              Entrez votre Email et nous vous enverrons un lien pour
              réinitialiser votre mot de passe
            </div>
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="input-line">
                <input
                  type="text"
                  value={email}
                  onChange={handleChange}
                  className="input-field poppins-medium"
                  placeholder="Email"
                  required
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
                      Envoyer
                    </button>
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

export default ResetPassword;
