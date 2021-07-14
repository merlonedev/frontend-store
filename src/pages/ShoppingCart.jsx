import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ShoppingCart extends Component {
  constructor() {
    super();

    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleFinish = this.handleFinish.bind(this);
  }

  handleIncrease(product) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    const [title, qtd, price, avQtd] = cart[product];
    cart = (qtd === avQtd)
      ? cart : { ...cart, [product]: [title, qtd + 1, price, avQtd] };
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  handleDecrease(product) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    const [title, qtd, price, avQtd] = cart[product];
    cart = (qtd === 0) ? cart : { ...cart, [product]: [title, qtd - 1, price, avQtd] };
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  handleRemove(product) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    delete cart[product];
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  handleFinish() {

  }

  noCartItem = () => (
    <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
  );

  listCartItem = (cart) => {
    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
    const totalValue = formatter.format(Object.entries(cart)
      .reduce((a, e) => a + e[1][2] * e[1][1], 0));
    return (
      <section>
        {Object.entries(cart).map((item, index) => (
          <div key={ index }>
            <p>
              <Link to="/shoppingcart">
                <button
                  type="button"
                  onClick={ () => this.handleRemove(item[0]) }
                >
                  X
                </button>
              </Link>
              <span data-testid="shopping-cart-product-name">
                {item[1][0]}
              </span>
              { `, R$ ${item[1][2]}, QTD:` }
              <Link to="/shoppingcart">
                <button
                  data-testid="product-decrease-quantity"
                  type="button"
                  onClick={ () => this.handleDecrease(item[0]) }
                >
                  -
                </button>
              </Link>
              <span data-testid="shopping-cart-product-quantity">
                {item[1][1]}
              </span>
              <Link to="/shoppingcart">
                <button
                  data-testid="product-increase-quantity"
                  type="button"
                  onClick={ () => this.handleIncrease(item[0]) }
                >
                  +
                </button>
              </Link>
              { `Valor Total: ${formatter.format(item[1][1] * item[1][2])}`}
            </p>
          </div>))}
        <p>
          {`Valor Total da Compra: ${totalValue}`}
        </p>
      </section>
    );
  }

  render() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    return (
      <div>
        { (cart && Object.keys(cart).length !== 0)
          ? this.listCartItem(cart) : this.noCartItem()}
        <Link to="/checkout" data-testid="checkout-products">
          <button type="button" onClick={ this.handleFinish }>Finalizar Compra</button>
        </Link>
        <div>
          <Link data-testid="shopping-cart-button" to="/">Voltar</Link>
        </div>
      </div>
    );
  }
}
