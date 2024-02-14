import React from "react";

function Input(props) {
  return (
    <div className="container">
      <div className="text"> Sign in form</div>
      <form className="form">
        {props.form.map((inputName, index) => (
          <input
            key={index}
            type="text"
            value={props.inputData[inputName] || ""}
            onChange={(event) => props.onInputChange(event, inputName)}
            placeholder={inputName}
          />
        ))}
      </form>
    </div>
  );
}

export default Input;
