import React from 'react';
import { Link } from 'react-router-dom';

export default class CheckoutButton extends React.Component {
  render() {
    return (
      <button type="button" className="button checkout-btn">
        <Link to="/checkout" data-testid="checkout-products">
          <p>Checkout</p>
        </Link>
      </button>
    );
  }
}
