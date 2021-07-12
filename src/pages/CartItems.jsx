import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

class CartItems extends React.Component {
  render() {
    return (
      <div>
        <FiShoppingCart />
        Carrinho de Compras
        <div>
          Seu carrinho de compras está vazio
        </div>
      </div>
    );
  }
}

export default CartItems;
