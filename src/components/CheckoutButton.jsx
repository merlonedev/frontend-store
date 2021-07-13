import React from 'react';
import Link from 'react-router-dom';

export default class CheckoutButton extends React.Component {
  render() {
    return (
      <Link to="/checkout">
        <button type="button">Finalizar Compra</button>
      </Link>
    );
  }
}
