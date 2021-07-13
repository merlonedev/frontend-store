import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const { data } = this.props;
    const { id, thumbnail, title, price } = data;

    return (
      <div data-testid="product">
        <img src={ thumbnail } alt={ title } />
        <h4>{ title }</h4>
        <span>{ `R$: ${price}` }</span>
        <Link
          data-testid="product-detail-link"
          to={ `product/${id}` }
        >
          {' '}
          VER DETALHES
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  data: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
