import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class ProductCard extends Component {
  handleCardClick = (product) => {
    const item = JSON.stringify(product);
    localStorage.setItem('product', item);
  }

  CheckFreeShipping(product) {
    if (product.shipping.free_shipping === true) {
      return (
        <div data-testid="free-shipping">Free Shipping</div>
      );
    }
  }

  render() {
    const { product, onProductClick } = this.props;
    return (
      <div className="product-container" data-testid="product" id={ product.id }>
        <Link
          to={ `/product/${product.id}` }
          onClick={ () => this.handleCardClick(product) }
          className="product-card"
        >
          <img src={ product.thumbnail } alt="" />
          <h1 data-testid="product-detail-link">{ product.title }</h1>
          <p>{ product.price }</p>
          <div>{this.CheckFreeShipping(product)}</div>
        </Link>
        <button
          type="button"
          onClick={ () => onProductClick(product) }
          data-testid="product-add-to-cart"
        >
          COMPRAR
        </button>
      </div>
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
