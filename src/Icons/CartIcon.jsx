import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CartIcon extends Component {
  render() {
    return (
      <Link to="/shopping-cart" data-testid="shopping-cart-button">
        <img
          className="icon"
          src="https://img.flaticon.com/icons/png/512/126/126510.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"
          alt="carrinho de compras"
        />
      </Link>
    );
  }
}

export default CartIcon;
