import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
    };
  }

  render() {
    return (
      <div>
        <Link to="/">Voltar para a Home</Link>
        <h5 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h5>
      </div>
    );
  }
}

export default ShoppingCart;
