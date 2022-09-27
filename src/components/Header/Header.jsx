import React from "react";
import "./header.scss";

function Header() {
  return (
    <header className="header">
        <img
          className="header__logo"
          alt="logo"
          src="img/logo-shop.png"
        />
    </header>
  );
}

export default Header;
