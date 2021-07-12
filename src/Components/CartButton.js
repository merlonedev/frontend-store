import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CartButton extends Component {
  render() {
    return (
      <Link to="cart-basket" data-testid="shopping-cart-button">
        <button type="button">Carrinho</button>
      </Link>
    );
  }
}

export default CartButton;
