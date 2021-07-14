import React from 'react';

class CartEmptyMessage extends React.Component {
  render() {
    return(
      <h2 data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </h2>
    );
  }
}

export default CartEmptyMessage;
