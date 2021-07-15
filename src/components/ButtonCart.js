import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonCart extends Component {
  render() {
    return (
      <Link className="link" to="/Cart" data-testid="shopping-cart-button">Carrinho</Link>
    );
  }
}

export default ButtonCart;
