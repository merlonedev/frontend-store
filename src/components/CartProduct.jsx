import React, { useState } from 'react';
import { Link } from 'react-router-dom';

class CartProduct extends React.Component {
  render() {
    const { cart } = useState;
    console.log(cart);
    return (
      <div>
        <Link to="/" data-testid="shopping-cart-button">
          <img src="https://img.icons8.com/ios/50/000000/back--v1.png" alt="voltar" className="back-image" />
        </Link>
        <h1>Carrinho de Compras</h1>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
  }
}

export default CartProduct;
