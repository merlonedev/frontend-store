import React from 'react';

export default class ShoppingCart extends React.Component {
  render() {
    return (
      <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
    );
  }
}
// Neste componente está sendo retornado um H1 com o texto informado.
