import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductCard extends Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <section data-testid="product">
        <h4>{ title }</h4>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
        <Link
          to={ { pathname: `/product/${product.id}`, state: { product } } }
          data-testid="product-detail-link"
        >
          <div data-testid="product">
            <p>{ product.title }</p>
            <img src={ product.thumbnail } alt="product" />
            <p>{ product.price }</p>
          </div>
        </Link>
      </section>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
};
