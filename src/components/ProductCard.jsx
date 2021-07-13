import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductCard extends Component {
  render() {
    const { product, onProductClick } = this.props;

    return (
      <section className="product-card" data-testid="product" id={ product.id }>
        <img src={ product.thumbnail } alt="" />
        <h1>{ product.title }</h1>
        <p>{ product.price }</p>
        <button
          type="button"
          onClick={ () => onProductClick(product) }
          data-testid="product-add-to-cart"
        >
          COMPRAR
        </button>
      </section>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  onProductClick: PropTypes.func.isRequired,
};
