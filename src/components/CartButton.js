import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cartIcon from '../icon/cart3.svg';

class CartButton extends React.Component {
  render() {
    const { shoppingCart } = this.props;

    return (
      <Link
        data-testid="shopping-cart-button"
        to={ { pathname: '/cart-page', shoppingCart } }
      >
        <img src={ cartIcon } alt="cart icon" />
      </Link>
    );
  }
}

CartButton.propTypes = {
  shoppingCart: PropTypes.arrayOf({}).isRequired,
};

export default CartButton;
