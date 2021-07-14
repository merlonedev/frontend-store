/* eslint-disable camelcase */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { product, searchText } = this.props;
    const { category_id, id, title, thumbnail, price } = product;
    return (
      <Link
        to={ `/product-details/${category_id}/${searchText}/${id}` }
        data-testid="product-detail-link"
      >
        <div data-testid="product">
          <h3>{title}</h3>
          <h4>{price}</h4>
          <img src={ thumbnail } alt={ title } />
        </div>
      </Link>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
    category_id: PropTypes.string,
  }).isRequired,
  searchText: PropTypes.string.isRequired,
};

export default ProductCard;
