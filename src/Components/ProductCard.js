import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { addToCart, product } = this.props;
    const { id, title, thumbnail, price } = product;
    return (
      <section data-testid="product">
        <h3>{ title }</h3>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
        <Link
          data-testid="product-detail-link"
          to={ { pathname: `/productDetail/${id}`, state: { title, thumbnail, price } } }
        >
          + Detalhes
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => addToCart(product) }
        >
          Adicionar ao carrinho
        </button>
      </section>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductCard;
