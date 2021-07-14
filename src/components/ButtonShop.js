import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonShop extends Component {
  render() {
    return (
      <div>
        <Link data-testid="checkout-products" to="/submit-page">Finalizar Compra</Link>
      </div>
    );
  }
}

export default ButtonShop;
