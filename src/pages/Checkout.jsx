import React, { Component } from 'react';
import CheckoutForm from '../components/checkout_form/CheckoutFom';

class Checkout extends Component {
  render() {
    return (
      <div>
        <h1>Checkout</h1>
        <CheckoutForm />
      </div>
    );
  }
}

export default Checkout;
