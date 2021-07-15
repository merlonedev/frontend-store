import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShoppingCartItem from './ShopingCartItem';
import ButtonShop from './ButtonShop';

class ShoppingCart extends Component {
  render() {
    const { carrinho } = this.props;
    return (
      <div className="cart-page">
        <ButtonShop />
        <div className="cart-items">
          { carrinho.map((item) => (
            <ShoppingCartItem
              key={ item.id }
              item={ item }
            />)) }
        </div>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  carrinho: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ShoppingCart;
