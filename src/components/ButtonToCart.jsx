import React from 'react';

class ButtonToCart extends React.Component {
  render() {
    return (
      <button
        type="button"
        data-testid="product-add-to-cart"
      // onClick={}
      >
        Add to Cart
      </button>);
  }
}

export default ButtonToCart;
