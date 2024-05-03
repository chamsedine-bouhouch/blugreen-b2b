import React from "react";
import "./input.css";
function Input(props) {
  return (
    <div className="container">
      <div className="InputTitle poppins-medium">Créer un compte</div>
      <div className="InputText poppins-regular">
        Votre compte vous permet de bénéficier de nombreux avantages : gérer
        votre wishlist, accéder à vos commandes, bénéficier d'offres
        exclusives...
      </div>

      <form className="form">
        {props.form.map((inputName, index) => (
          <input
            key={index}
            type="text"
            value={props.inputData[inputName] || ""}
            onChange={(event) => props.onInputChange(event, inputName)}
            placeholder={inputName}
            className="poppins-medium"
          />
        ))}
      </form>
    </div>
  );
}

export default Input;
