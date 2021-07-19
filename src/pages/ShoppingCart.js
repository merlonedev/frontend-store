import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      value: 1,
    };
    this.empyCart = this.empyCart.bind(this);
  }

  empyCart() {
    return (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    );
  }

  render() {
    const { shoppingCart } = this.props;
    const { value } = this.state;
    if (!shoppingCart.length) return this.empyCart();

    return (
      <main>
        {shoppingCart.map((
          product,
        ) => (
          <section key={ product.id }>
            <h3 data-testid="shopping-cart-product-name">
              {product.title}
            </h3>
            <img src={ product.thumbnail } alt={ product.title } />
            <h6>
              {`Preço:R$ ${product.price}`}
            </h6>
            <p htmlFor="quantidade" data-testid="shopping-cart-product-quantity">
              { value }
            </p>
          </section>
        ))}
      </main>
    );
  }
}

ShoppingCart.propTypes = {
  shoppingCart: PropTypes.arrayOf(Object).isRequired,
};

export default ShoppingCart;
