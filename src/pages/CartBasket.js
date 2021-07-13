import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
      <main>
        <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
        <Link to="/">Página Inicial</Link>
        <CartItems cartList={ cartList } />
      </main>
    );
  }
}

CartBasket.propTypes = {
  cartList: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default CartBasket;
