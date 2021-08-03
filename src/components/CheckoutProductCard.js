import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckoutProductCard extends Component {
  render() {
    const { product } = this.props;
    return (
      <>
        <h3>
          {product.product.title}
        </h3>
        <img src={ product.product.thumbnail } alt={ product.product.title } />
        <h4>
          {product.price}
        </h4>
        <h4>
          {product.quantity}
        </h4>
        <h4>
          {product.quantity * product.price}
        </h4>
      </>
    );
  }
}

CheckoutProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    product: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      thumbnail: PropTypes.string,
    }),
  }).isRequired,
};

export default CheckoutProductCard;
