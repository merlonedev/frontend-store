import React, { Component } from 'react';

class ButtonToCart extends Component {
  render() {
    return (
      <button
        type="button"
        data-testid="product-detail-add-to-cart"
      // onClick={}
      >
        Add to Cart
      </button>);
  }
}

export default ButtonToCart;
