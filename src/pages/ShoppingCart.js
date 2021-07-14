import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartList from '../components/CartList';

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    const { location: { state } } = props;
    console.log(props.location);

    this.state = {
      cart: state,
    };

    // console.log(this.state.cart);

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
    const { cart } = this.state;
    return (
      <div>
        <CartList
          cart={ cart }
        />
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.objectOf(PropTypes.string),
};

ShoppingCart.defaultProps = {
  location: {
    hash: '',
    key: '',
    pathname: '',
  },
};
