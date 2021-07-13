import React, { Component } from 'react';

class CartItems extends Component {
  render() {
    const { cartList } = this.props;
    return (
      <div>
        {cartList.map((item) => (
          <div key={ item.id }>
            <h1 data-testid="shopping-cart-product-name">{ item.title }</h1>
            <p data-testid="shopping-cart-product-quantity">1</p>
          </div>
        ))}
      </div>
    );
  }
}

export default CartItems;
