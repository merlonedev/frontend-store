import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CartItems from './CartItems';

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
          <CartItems cartItems={ cartItems } handlers={ handlers } />
        )}
        <p>
          <Link to="/checkout">Checkout</Link>
          <Link to="/">VOLTAR</Link>
        </p>
      </section>
    );
  }
}

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
