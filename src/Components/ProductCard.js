import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductCard extends Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price, id } = product;
    return (
      <Link
        to={ { pathname: `/product/${id}`, state: { product } } }
        data-testid="product-detail-link"
      >
        <section data-testid="product">
          <h4>{ title }</h4>
          <img src={ thumbnail } alt={ title } />
          <p>{ price }</p>
        </section>
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
  }).isRequired,
};
