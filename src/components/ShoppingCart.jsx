import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CartItems from './CartItems';

class ShoppingCart extends React.Component {
  render() {
    const { cartItems } = this.props;
    return (
      <section>
        {!cartItems ? (
          <span data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio.
          </span>
        ) : (
          <CartItems cartItems={ cartItems } />
        )}
        <p>
          <Link to="/">VOLTAR</Link>
        </p>
      </section>
    );
  }
}
export default ShoppingCart;

ShoppingCart.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
  })).isRequired,
};
