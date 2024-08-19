import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Lego CDU Store</h1>
      <h2>LINKS, LOGIN, ETC</h2>
      <nav>
        <Link to="/">Home</Link>
        {/* TODO: Agregar enlaces para login, carrito, y administración */}
      </nav>
    </header>
  );
}

export default Header;