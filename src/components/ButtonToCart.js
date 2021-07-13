import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonToCart extends Component {
  render() {
    return (
      <button type="button">
        <Link
          data-testid="shopping-cart-button"
          to="/cart"
        >
          CARRINHO DE COMPRAS
        </Link>
      </button>
    );
  }
}

export default ButtonToCart;
