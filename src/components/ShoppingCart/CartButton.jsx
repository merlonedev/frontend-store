import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CartButton extends Component {
  render() {
    return (
      <Link to="/cart" data-testid="shopping-cart-button">
        <img src="https://img.icons8.com/ios/50/000000/shopping-cart.png" alt="carrinho" className="cart-image" />
      </Link>
    );
  }
}

export default CartButton;
