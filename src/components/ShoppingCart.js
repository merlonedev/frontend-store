import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShoppingCartItem from './ShopingCartItem';
import ButtonShop from './ButtonShop';

class ShoppingCart extends Component {
  render() {
    const { carrinho } = this.props;
    return (
      <div>
        <ButtonShop />
        { carrinho.map((item) => (
          <ShoppingCartItem
            key={ item.id }
            item={ item }
          />)) }
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  carrinho: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ShoppingCart;
