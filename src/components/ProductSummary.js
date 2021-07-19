import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductSummary extends Component {
  render() {
    const { product } = this.props;
    const { title, price, thumbnail } = product;
    return (
      <div data-testid="product">
        <h3>{title}</h3>
        <h4>{price}</h4>
        <img src={ thumbnail } alt={ title } />
      </div>
    );
  }
}

ProductSummary.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
    category_id: PropTypes.string,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool,
    }),
  }).isRequired,
};

export default ProductSummary;
