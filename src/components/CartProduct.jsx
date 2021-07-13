import React from 'react';
import { Link } from 'react-router-dom';

class CartProduct extends React.Component {
  render() {
    const localStorageProducts = JSON.parse(localStorage.getItem('products')) || [];
    return (
      <div>
        <Link to="/" data-testid="shopping-cart-button">
          <img src="https://img.icons8.com/ios/50/000000/back--v1.png" alt="voltar" className="back-image" />
        </Link>
        <h1>Carrinho de Compras</h1>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        {localStorageProducts.map((product, index) => (
          <div key={ index }>
            <p
              data-testid="shopping-cart-product-name"
            >
              {product.title}
            </p>
            <span data-testid="shopping-cart-product-quantity">
              { product.quantity}
            </span>
          </div>))}
      </div>
    );
  }
}

export default CartProduct;
