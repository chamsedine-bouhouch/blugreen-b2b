import React from "react";

function Header(props) {
  return (
    <div>
      <div className="navbar">
        <ul className="menu">
          {props.menu.map((item) => (
            <li className="menu-item">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
