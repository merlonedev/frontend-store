import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartItems from '../Components/CartItems';

class CartBasket extends Component {
  render() {
    const { cartList } = this.props;
    if (cartList.length === 0) {
      return (
        <main>
          <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
        </main>
      );
    }

    return (
      <CartItems cartList={ cartList } />
    );
  }
}

CartBasket.propTypes = {
  cartList: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default CartBasket;
