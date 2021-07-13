import React from 'react';
import CommentForm from '../components/CommentForm';

class ShoppingCart extends React.Component {
  render() {
    return (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    );
  }
}

export default ShoppingCart;
