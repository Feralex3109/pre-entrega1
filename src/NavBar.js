import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar">
      {/* Otros elementos de la barra de navegación */}
      <CartWidget />
    </nav>
  );
};

export default NavBar;
