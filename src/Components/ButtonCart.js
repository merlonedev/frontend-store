import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cart from '../Icon/cart.png';

class ButtonCart extends Component {
  render() {
    return (
      <button
        type="button"
      >
        <Link to="/cart" data-testid="shopping-cart-button">
          <img src={ cart } alt="shopping cart" />
        </Link>
      </button>
    );
  }
}

export default ButtonCart;
