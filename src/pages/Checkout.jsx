import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TiArrowBack } from 'react-icons/ti';
import PropTypes from 'prop-types';
import InfoCartCheckout from '../components/InfoCartCheckout';
import CheckoutForm from '../components/checkout_form/CheckoutFom';
import CartIcon from '../components/CartIcon';

class Checkout extends Component {
  render() {
    const { cartItems, qtd } = this.props;
    return (
      <div>
        <h1>Checkout</h1>
        <Link className="goBack-checkout" to="/cart"><TiArrowBack /></Link>
        <Link to="/cart" data-testid="shopping-cart-button">
          <CartIcon qtd={ qtd } />
        </Link>
        <InfoCartCheckout cartItems={ cartItems } />
        <CheckoutForm />
      </div>
    );
  }
}

Checkout.propTypes = {
  cartItems: PropTypes.shape({
    cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
    total: PropTypes.number.isRequired,
  }).isRequired,
  qtd: PropTypes.number.isRequired,
};

export default Checkout;
