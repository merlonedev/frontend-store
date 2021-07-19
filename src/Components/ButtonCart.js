import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cart from '../Icon/cart.png';

class ButtonCart extends Component {
  render() {
    const { shoppingCart } = this.props;
    return (
      <button
        type="button"
        className="cart-div"
      >
        <Link
          to={ { pathname: '/shoppingCart', state: shoppingCart } }
          data-testid="shopping-cart-button"
        >
          <img src={ cart } alt="shopping cart" className="cart-img" />
        </Link>
      </button>
    );
  }
}

ButtonCart.propTypes = {
  shoppingCart: PropTypes.arrayOf(Object).isRequired,
};

export default ButtonCart;
