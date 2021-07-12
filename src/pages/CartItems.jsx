import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

class CartItems extends React.Component {
  render() {
    return (
      <div>
        <FiShoppingCart />
        Carrinho de Compras
        <div data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </div>
      </div>
    );
  }
}

export default CartItems;
