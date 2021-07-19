import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AddToCartButton from './AddToCartButton';
import FreeShipping from './FreeShipping';
import ProductSummary from './ProductSummary';

class ProductCard extends Component {
  render() {
    const { product, renderDetailsCallBack, addToCartCallback } = this.props;
    const { id } = product;
    return (
      <section>
        <button
          type="button"
          data-testid="product-detail-link"
          onClick={ () => { renderDetailsCallBack(id); } }
        >
          <ProductSummary
            product={ product }
          />
          {
            (product.shipping.free_shipping)
              ? <FreeShipping />
              : null
          }
        </button>
        <AddToCartButton
          product={ product }
          addToCartCallback={ (prod) => addToCartCallback(prod) }
          dataTestId="product-add-to-cart"
        />
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
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool,
    }),
  }).isRequired,
  renderDetailsCallBack: PropTypes.func.isRequired,
  addToCartCallback: PropTypes.func.isRequired,
};

export default ProductCard;
