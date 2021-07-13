import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ShoppingCart extends Component {
  noCartItem = () => (
    <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
  );

  listCartItem = (cart) => (
    <section>
      { Object.entries(cart).map((item, index) => (
        <div key={ index }>
          <p>
            <span data-testid="shopping-cart-product-name">
              {item[0]}
            </span>
            , QTD:
            <span data-testid="shopping-cart-product-quantity">
              {item[1]}
            </span>
          </p>
        </div>))}
    </section>
  );

  render() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    return (
      <div>
        { cart ? this.listCartItem(cart) : this.noCartItem() }
        <Link data-testid="shopping-cart-button" to="/">Voltar</Link>
        <Link to="/checkout">Finalizar Compra</Link>
      </div>
    );
  }
}
