import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const { products: {
      title,
      thumbnail,
      price,
      id,
    } } = this.props;
    return (
      <div
        data-testid="product"
        className="product-container"
      >
        <h1 className="title-product">{ title }</h1>
        <img src={ thumbnail } alt={ title } className="image-product" />
        <p className="price-product">{`USD ${price}`}</p>
        <Link
          data-testid="product-detail-link"
          to={ `/productDetails/${id}` }
        >
          Ver Detalhes
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
}.isRequired;

export default ProductCard;
