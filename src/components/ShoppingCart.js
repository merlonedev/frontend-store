import React from 'react';

class ShoppingCart extends React.Component {
  render() {
    return (
      <div data-testid="shopping-cart-empty-message">
        <p>Seu carrinho está vazio</p>
      </div>
    );
  }
}

export default ShoppingCart;
