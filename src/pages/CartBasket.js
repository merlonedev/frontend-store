import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CartItems from '../Components/CartItems';

class CartBasket extends Component {
  render() {
    const { cartList, removeItem } = this.props;
    if (cartList.length === 0) {
      return (
        <main>
          <Link to="/">Página Inicial</Link>
          <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
        </main>
      );
    }

    return (
      <main>
        <Link to="/">Página Inicial</Link>
        <CartItems cartList={ cartList } removeItem={ removeItem } />
        <Link to="/checkout" data-testid="checkout-products">
          <button type="button">Finalizar Compra</button>
        </Link>
      </main>
    );
  }
}

CartBasket.propTypes = {
  cartList: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default CartBasket;
