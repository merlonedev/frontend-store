import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { product } = this.props;
    const { id, title, thumbnail, price } = product;
    return (
      <div data-testid="product">
        <h3>{title}</h3>
        <h4>{price}</h4>
        <Link data-testid="product-detail-link" to={`/product-details/${id}`}>
          <img src={ thumbnail } alt={ title } />
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default ProductCard;
