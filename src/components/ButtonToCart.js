import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ButtonToCart extends Component {
  render() {
    const { cartList } = this.props;
    return (
      <button type="button">
        <Link
          data-testid="shopping-cart-button"
          to="/cart"
        >
          CARRINHO DE COMPRAS:
          <span data-testid="shopping-cart-size">
            {cartList.reduce(((acc, item) => acc + item.quantity), 0)}
          </span>
        </Link>
      </button>
    );
  }
}

ButtonToCart.propTypes = {
  cartList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ButtonToCart;
