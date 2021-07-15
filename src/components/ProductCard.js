/* eslint-disable camelcase */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const { product, callBack, addToCart } = this.props;
    const { id, title, thumbnail, price } = product;
    return (
      <section>
        <button
          type="button"
          data-testid="product-detail-link"
          onClick={ () => {
            callBack(id);
          } }
        >
          <div data-testid="product">
            <h3>{title}</h3>
            <h4>{price}</h4>
            <img src={ thumbnail } alt={ title } />
          </div>
        </button>
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
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
    category_id: PropTypes.string,
  }).isRequired,
  callBack: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductCard;
