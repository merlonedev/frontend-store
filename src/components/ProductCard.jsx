import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductCard extends Component {
  render() {
    const { product } = this.props;

    return (
      <section className="product-card" data-testid="product">
        <img src={ product.thumbnail } alt="" />
        <h1>{ product.title }</h1>
        <p>{ product.price }</p>
      </section>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
