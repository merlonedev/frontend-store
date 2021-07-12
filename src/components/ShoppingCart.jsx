import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  render() {
    return (
      <section>
        <span data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </span>
        <p>
          <Link to="/">VOLTAR</Link>
        </p>
      </section>
    );
  }
}
export default ShoppingCart;
