import React from "react";

function Button(props) {
  return (
    <div className="container-button">
      <button className="button" onClick={props.onClick}>
        {props.label}
      </button>
    </div>
  );
}

export default Button;
