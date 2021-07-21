import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProductCard from './ProductCard';

class ProductList extends Component {
  render() {
    const { productList = [], renderDetailsCallBack, addToCartCallback } = this.props;
    return (
      <section>
        {productList
          .map((product) => (
            <ProductCard
              key={ product.id }
              product={ product }
              renderDetailsCallBack={ () => renderDetailsCallBack(product) }
              addToCartCallback={ addToCartCallback }
            />))}
      </section>
    );
  }
}

ProductList.propTypes = {
  renderDetailsCallBack: PropTypes.func.isRequired,
  addToCartCallback: PropTypes.func.isRequired,
  productList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductList;
