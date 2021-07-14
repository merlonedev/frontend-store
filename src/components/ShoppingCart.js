import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

class ShoppingCart extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    const {
      removeItem,
      cartItemDiminishQuantity,
      cartItemAddQuantity,
      cartList } = this.props;
    if (cartList.length === 0) {
      return (
        <div data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </div>
      );
    }
    return (
      <section>
        <div>
          <ul>
            { cartList.map(
              (item) => (<CartItem
                key={ item.id }
                item={ item }
                removeItem={ removeItem }
                cartItemDiminishQuantity={ cartItemDiminishQuantity }
                cartItemAddQuantity={ cartItemAddQuantity }
              />),
            )}
          </ul>
        </div>
      </section>
    );
  }
}

ShoppingCart.propTypes = {
  removeItem: PropTypes.func,
  cartItemDiminishQuantity: PropTypes.func,
  cartItemAddQuantity: PropTypes.func,
}.isRequired;

export default ShoppingCart;
