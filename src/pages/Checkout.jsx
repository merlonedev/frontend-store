import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InfoCartCheckout from '../components/InfoCartCheckout';
import CheckoutForm from '../components/checkout_form/CheckoutFom';

class Checkout extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div>
        <h1>Checkout</h1>
        <InfoCartCheckout cartItems={ cartItems } />
        <CheckoutForm />
      </div>
    );
  }
}

Checkout.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default Checkout;
