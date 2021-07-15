import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price, id } = product;
    const CORRECT_SIZE = -5;

    let formatPrice = String(parseFloat((price * 100) / 100).toFixed(2));
    formatPrice = formatPrice.replace(/\./g, ',');

    return (
      <div className="product-container" data-testid="product">
        <div className="product-title-container">
          <Link
            className="product-link"
            data-testid="product-detail-link"
            to={ { pathname: `/product/${id}`, state: { product } } }
          >
            <h3 className="product-title">{ title }</h3>
          </Link>
        </div>
        <div className="product-description-container">
          <Link
            className="product-link"
            data-testid="product-detail-link"
            to={ { pathname: `/product/${id}`, state: { product } } }
          >
            <img
              src={ `${thumbnail.slice(0, CORRECT_SIZE)}O.jpg` }
              className="product-image"
              alt="Imagem do Produto"
            />
          </Link>
          <Link
            className="product-link"
            data-testid="product-detail-link"
            to={ { pathname: `/product/${id}`, state: { product } } }
          >
            <span className="product-price">
              { `R$ ${formatPrice}` }
            </span>
          </Link>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default ProductCard;
