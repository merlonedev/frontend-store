import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  render() {
    const getElementCart = JSON.parse(sessionStorage.getItem('addCart'));
    const emptyMessage = (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>);
    return (
      getElementCart === null
        ? emptyMessage
        : (
          <ul>
            { getElementCart.map((product) => (
              <li key={ product.id }>
                <p data-testid="shopping-cart-product-name">
                  { product.title }
                </p>
                <p>
                  { `R$ ${product.price}` }
                </p>
              </li>)) }
            <p data-testid="shopping-cart-product-quantity">
              { `Quantidade de produtos: ${getElementCart.length}` }
            </p>
            <Link to="/checkout" data-testid="checkout-products">Finalizar compra</Link>
          </ul>)
    );
  }
}

export default ShoppingCart;
