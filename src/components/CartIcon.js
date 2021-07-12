import React, { Component } from 'react';
import './cartIcon.css';
import { Link } from 'react-router-dom';
import image from '../assets/cart.svg';

class CartIcon extends Component {
  render() {
    return (
      <Link to="/Cart" data-testid="shopping-cart-button">
        <img src={ image } className="cart-img" alt="Carrinho de Compras" />
      </Link>
    );
  }
}

export default CartIcon;
