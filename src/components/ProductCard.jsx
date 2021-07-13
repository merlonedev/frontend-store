import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class ProductCard extends Component {
  handleCardClick = (product) => {
    // evt.preventDefault();
    const item = JSON.stringify(product);
    localStorage.setItem('product', item);
  }

  render() {
    const { product } = this.props;

    return (
      <Link
        to={ `/product/${product.id}` }
        onClick={ () => this.handleCardClick(product) }
        className="product-card"
        data-testid="product"
      >
        <img src={ product.thumbnail } alt="" />
        <h1 data-testid="product-detail-link">{ product.title }</h1>
        <p>{ product.price }</p>
      </Link>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    category_id: PropTypes.string.isRequired,
  }).isRequired,
};
