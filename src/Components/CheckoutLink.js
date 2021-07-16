import React from 'react';
import { Link } from 'react-router-dom';

class CheckoutLink extends React.Component {
  render() {
    return (
      <div>
        <Link
          to="/checkout"
          data-testid="checkout-products"
          className=""
        >
          Finalizar Compra
        </Link>
      </div>
    );
  }
}

export default CheckoutLink;
