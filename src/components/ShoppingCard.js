import React, { Component } from 'react';
import ShoppingCardIcone from './ShoppingCardIcone';

class ShoppingCard extends Component {
  render() {
    return (
      <div>
        <ShoppingCardIcone />
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
  }
}

export default ShoppingCard;
