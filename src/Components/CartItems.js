import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ManipularCarrinho from './ManipularCarrinho';

class CartItems extends Component {
  render() {
    const { cartList, removeItem } = this.props;
    return (
      <div>
        {cartList.map((item) => (
          <ManipularCarrinho item={ item } key={ item.id } removeItem={ removeItem } />
        ))}
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
