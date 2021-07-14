import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartItemProduct extends Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <div data-testid="product">
        <p data-testid="shopping-cart-product-name">{title}</p>
        <img src={ thumbnail } alt={ title } />
        <p>{price}</p>
        <p data-testid="shopping-cart-product-quantity">1</p>
      </div>
    );
  }
}

CartItemProduct.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};
