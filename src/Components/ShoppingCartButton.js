import React from 'react';
import { Link } from 'react-router-dom';

export default class ShoppingCartButton extends React.Component {
  render() {
    return (
      <button type="button" className="cart-button">
        <Link
          to="/shopping-cart"
          data-testid="shopping-cart-button"
        >
          Carrinho
        </Link>
      </button>
    );
  }
}
