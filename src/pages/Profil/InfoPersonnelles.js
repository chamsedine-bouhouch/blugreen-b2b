import React, { useState } from "react";

export const InfoPersonnelles = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    password: "",
    genre: "",
    num: "",
    datenaiss: "",
    pays: "",
    ville: "",
    adresse: "",
    allergies: "",
  });

  const {
    nom,
    prenom,
    email,
    password,
    genre,
    num,
    datenaiss,
    pays,
    ville,
    adresse,
    allergies,
  } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleModifierClick = (fieldName) => {
    console.log(`Modifier ${fieldName}`);
  };

  return (
    <div className="content-profil">
      <div className="accueilTitle poppins-semibold">
        Mes informations personnelles
      </div>
      <form className="forminfo">
        <div className="leftformcol">
          <div className="input-line1">
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
          <div className="input-line1">
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
          <div className="input-line1">
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="input-field poppins-medium"
              placeholder="Email"
              required
            />
            <a
              href="/"
              className="modifier poppins-medium"
              onClick={() => handleModifierClick("email")}
            >
              Modifier mon email
            </a>
          </div>
          <div className="input-line1">
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              className="input-field poppins-medium"
              placeholder="Mot de passe"
              required
            />
            <a
              href="/"
              className="modifier poppins-medium"
              onClick={() => handleModifierClick("password")}
            >
              Modifier mon mot de passe
            </a>
          </div>
          <div className="titleforminfo poppins-medium">
            Quels sont vos besoins ?
          </div>
          <div className="input-line1">
            <select
              name="allergies"
              value={allergies}
              onChange={handleChange}
              className="input-field poppins-medium"
              required
              multiple
            >
              <option value="arachides">Soin visage</option>
              <option value="lactose">Soin cheveux</option>
              <option value="gluten">Soin corps</option>
            </select>
          </div>
          <div className="titleforminfo poppins-medium">
            Mes allergies de contact{" "}
          </div>
          <div className="input-line1">
            <select
              name="allergies"
              value={allergies}
              onChange={handleChange}
              className="input-field poppins-medium"
              required
              multiple
            >
              <option value="arachides">Arachides</option>
              <option value="lactose">Lactose</option>
              <option value="gluten">Gluten</option>
            </select>
          </div>
        </div>
        <div className="rightformcol">
          <div className="payscontainer">
            <div className="input-line2">
              <select
                name="genre"
                value={genre}
                onChange={handleChange}
                className="input-field poppins-medium"
                required
              >
                <option value="homme">Homme</option>
                <option value="femme">Femme</option>
              </select>
            </div>
            <div className="input-line2">
              <input
                type="date"
                name="datenaiss"
                value={datenaiss}
                onChange={handleChange}
                className="input-field poppins-medium"
                placeholder="Date de naissance"
                required
              />
            </div>
          </div>
          <div className="payscontainer">
            <div className="input-line2">
              <input
                type="text"
                name="pays"
                value={pays}
                onChange={handleChange}
                className="input-field poppins-medium"
                placeholder="Pays"
                required
              />
            </div>
            <div className="input-line2">
              <input
                type="text"
                name="ville"
                value={ville}
                onChange={handleChange}
                className="input-field poppins-medium"
                placeholder="Ville"
                required
              />
            </div>
          </div>
          <div className="input-line1">
            <input
              type="text"
              name="adresse"
              value={adresse}
              onChange={handleChange}
              className="input-field poppins-medium"
              placeholder="Adresse"
              required
            />
            <a
              href="/"
              className="modifier poppins-medium"
              onClick={() => handleModifierClick("adresse")}
            >
              Modifier mon adresse
            </a>
          </div>
          <div className="input-line1">
            <input
              type="number"
              name="num"
              value={num}
              onChange={handleChange}
              className="input-field poppins-medium"
              placeholder="Numéro de téléphone"
              required
            />
            <a
              href="/"
              className="modifier poppins-medium"
              onClick={() => handleModifierClick("num")}
            >
              Modifier mon numéro de téléphone
            </a>
          </div>
          <div className="titleforminfo poppins-medium">
            Quels sont vos besoins précis?
          </div>
          <div className="input-line1">
            <select
              name="allergies"
              value={allergies}
              onChange={handleChange}
              className="input-field poppins-medium"
              required
              multiple
            >
              <option value="arachides">Arachides</option>
              <option value="lactose">Lactose</option>
              <option value="gluten">Gluten</option>
            </select>
          </div>
          <div className="titleforminfo poppins-medium">
            Mes allergies alimentaires
          </div>
          <div className="input-line1">
            <select
              name="allergies"
              value={allergies}
              onChange={handleChange}
              className="input-field poppins-medium"
              required
              multiple
            >
              <option value="arachides">Arachides</option>
              <option value="lactose">Lactose</option>
              <option value="gluten">Gluten</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};
