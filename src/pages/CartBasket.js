import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CartBasket extends Component {
  render() {
    return (
      <main>
        <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
        <Link to="/">Página Inicial</Link>
      </main>
    );
  }
}

export default CartBasket;
