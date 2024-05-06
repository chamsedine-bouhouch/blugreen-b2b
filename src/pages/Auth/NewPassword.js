import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Auth.css";
import ImageAuth from "../../Images/imageAuth3.png";

const NewPsd = () => {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const { newPassword, confirmPassword } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword === "" || confirmPassword === "") {
      alert("Veuillez remplir tous les champs.");
      return;
    }
    if (newPassword !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }

    console.log(formData);
  };

  return (
    <div className="login-container">
      <div className="content-container">
        <div className="combined-row">
          <div className="left-col">
            <img src={ImageAuth} className="ImageAuth" alt="Logo" />
          </div>
          <div className="right-col">
            <div className="welcome-text poppins-semibold">
              Bienvenue chez BluGreen
            </div>
            <div className="msg-text poppins-medium">
              Veuillez entre votre nouveau mot de passe
            </div>
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="input-line">
                <input
                  type="password"
                  name="newPassword"
                  value={newPassword}
                  onChange={handleChange}
                  className="input-field  poppins-medium"
                  placeholder="Nouveau mot de passe"
                  required
                />
                <input
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleChange}
                  className="input-field  poppins-medium"
                  placeholder="Confirmer votre mot de passe"
                  required
                />
              </div>

              <div className="button-container">
                <div className="login-button">
                  <Link to="/">
                    <button
                      type="submit"
                      className="btn btn-primary  poppins-medium"
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

export default NewPsd;
