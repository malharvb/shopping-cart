import React from 'react';
import '../styles/navbar.css';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StyledLink from '../util/StyledLink';

function NavBar({ isItemAdded, totalQuantity }) {
  return (
    <nav>
      <StyledLink to="/"><h1 className="title">NoStore</h1></StyledLink>
      <ul className="nav-list">
        <StyledLink to="/shop"><li>Shop</li></StyledLink>
        <StyledLink to="/cart">
          <li>
            <FontAwesomeIcon icon={faShoppingCart} />
            {isItemAdded ? <sub className="number-of-cart-items">{totalQuantity}</sub> : <sub />}
          </li>
        </StyledLink>
      </ul>
    </nav>
  );
}

export default NavBar;
