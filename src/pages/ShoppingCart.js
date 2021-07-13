import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartList from '../components/CartList';

export default class ShoppingCart extends Component {
  constructor() {
    super();

    this.state = {
      cart: [],
    };

    this.emptyCart = this.emptyCart.bind(this);
    this.callCart = this.callCart.bind(this);
  }

  callCart() {
    const { cart } = this.state;
    return (
      <CartList
        cart={ cart }
      />
    );
  }

  emptyCart() {
    return (
      <div data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </div>
    );
  }

  render() {
    const { cart } = this.props;
    return (
      <div>
        { cart.length === 0 ? this.emptyCart() : this.callCart() }
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cart: PropTypes.arrayOf(Object).isRequired,
};
