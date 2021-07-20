import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      quantidade: 1,
    };
    this.empyCart = this.empyCart.bind(this);
    this.handleClickAdd = this.handleClickAdd.bind(this);
    this.handleClickSub = this.handleClickSub.bind(this);
  }

  handleClickAdd() {
    this.setState((numAnterior) => ({
      quantidade: numAnterior.quantidade + 1,
    }));
  }

  handleClickSub() {
    const { quantidade } = this.state;
    if (quantidade > 1) {
      this.setState((numAnterior) => ({
        quantidade: numAnterior.quantidade - 1,
      }));
    }
  }

  empyCart() {
    return (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    );
  }

  render() {
    const { shoppingCart } = this.props;
    const { quantidade } = this.state;
    if (!shoppingCart.length) return this.empyCart();

    return (
      <main>
        {shoppingCart.map((
          product,
        ) => (
          <section key={ product.id } id="shopping-cart-product-content">
            <div id="shopping-cart-product-details">
              <button
                className="shopping-cart-btn"
                type="button"
                data-testid="product-increase-quantity"
                onClick={ this.handleClickRemove }
              >
                X
              </button>
              <img src={ product.thumbnail } alt={ product.title } />
              <h5 data-testid="shopping-cart-product-name">
                {product.title}
              </h5>
            </div>
            <div id="shopping-cart-product-qtd">
              <button
                className="shopping-cart-btn"
                type="button"
                data-testid="product-decrease-quantity"
                onClick={ this.handleClickSub }
              >
                -
              </button>
              <div>
                <p htmlFor="quantidade" data-testid="shopping-cart-product-quantity">
                  { quantidade }
                </p>
              </div>
              <button
                className="shopping-cart-btn"
                type="button"
                data-testid="product-increase-quantity"
                onClick={ this.handleClickAdd }
              >
                +
              </button>
              <h6>
                {`R$ ${product.price}`}
              </h6>
            </div>
          </section>
        ))}
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ this.handleClickAdd }
        >
          Finalizar Compra
        </button>
      </main>
    );
  }
}

ShoppingCart.propTypes = {
  shoppingCart: PropTypes.arrayOf(Object).isRequired,
};

export default ShoppingCart;
