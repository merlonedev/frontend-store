import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends Component {
  render() {
    return (
      <section>
        <div>
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
          <Link to="/">Home</Link>
        </div>
      </section>
    );
  }
}

export default ShoppingCart;
