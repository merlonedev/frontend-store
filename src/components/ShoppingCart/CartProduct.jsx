import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Buttons from './Buttons';

class CartProduct extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        {products.map((product, index) => (
          <div key={ index }>
            <p
              data-testid="shopping-cart-product-name"
            >
              {product.title}
            </p>
            <Buttons
              product={ product }
            />
          </div>))}
      </div>
    );
  }
}

CartProduct.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    quantity: PropTypes.number,
  })),
}.isRequired;

export default CartProduct;
