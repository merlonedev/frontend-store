import React from 'react';
import { Link } from 'react-router-dom';
import cartIcon from '../icon/cart3.svg';

class CartButton extends React.Component {
  render() {
    return (
      <Link
        data-testid="shopping-cart-button"
        to="/cart-page"
      >
        <img src={ cartIcon } alt="cart icon" />
      </Link>
    );
  }
}

export default CartButton;
