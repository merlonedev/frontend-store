import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import image from '../Images/ShopCartIcon.png';

class ButtonCart extends Component {
  render() {
    return (
      <Link to="../Pages/CartPages" data-testid="shopping-cart-button">
        <img src={ image } width="50px" alt="botão carrinho de compras" />
      </Link>
    );
  }
}

export default ButtonCart;
