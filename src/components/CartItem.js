import React, { Component } from 'react';

class CartItem extends Component {
  render() {
    const { product } = this.props;
    const { title } = product;
    return (
      <div>
        <p data-testid="shopping-cart-product-name">{title}</p>
      </div>
    );
  }
}

export default CartItem;
