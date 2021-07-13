import React, { Component } from 'react';
import ShoppingCardIcon from './ShoppingCardIcon';

class ShoppingCard extends Component {
  render() {
    return (
      <div>
        <ShoppingCardIcon />
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
  }
}

export default ShoppingCard;
