import React from 'react';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <h1>NoStore</h1>
      <ul className="nav-list">
        <Link to="/"><li>Home</li></Link>
        <Link to="/shop"><li>Shop</li></Link>
      </ul>
    </nav>
  );
}

export default NavBar;
