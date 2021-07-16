import React, { Component } from 'react';
import CartItem from './CartItem';

class CartList extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        {products.map((product) => (<CartItem
          key={ product.title }
          product={ product }
        />))}
      </div>
    );
  }
}

export default CartList;
