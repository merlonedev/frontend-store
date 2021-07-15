import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CartItems from './CartItems';
import ReturnButton from './subcomponents/ReturnButton';
import CheckoutButton from './subcomponents/CheckoutButton';

// prettier-ignore
export default class ShoppingCart extends React.Component {
  render() {
    const { cartItems, handlers } = this.props;
    return (
      <section>
        {!cartItems.length ? (
          <span data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio.
          </span>
        ) : (
          <div className="cart-items">
            <CartItems cartItems={ cartItems } handlers={ handlers } showButtons="true" />
          </div>
        )}
        <p>
          {/* <Link data-testid="checkout-products" to="/checkout">Checkout</Link> */}
          <CheckoutButton />
          {/* <Link to="/">VOLTAR</Link> */}
          <ReturnButton path="/" />
        </p>
      </section>
    );
  }
}

// prettier-ignore
ShoppingCart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handlers: PropTypes.shape({
    remove: PropTypes.func,
    increase: PropTypes.func,
    decrease: PropTypes.func,
  }).isRequired,
};
