import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartManipulation from './CartManipulation';
import '../styles/cartItems.css';

class CartItems extends Component {
  render() {
    const { cartList, removeItem } = this.props;
    return (
      <div>
        <h2 className="cart-items-text">
          Carrinho De Compras
        </h2>
        <div className="cart-items-content">
          {cartList.map((item) => (
            <CartManipulation item={ item } key={ item.id } removeItem={ removeItem } />
          ))}
        </div>
      </div>
    );
  }
}

CartItems.propTypes = {
  cartList: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default CartItems;
