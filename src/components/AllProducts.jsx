import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

class AllProducts extends Component {
  render() {
    const { searchProducts } = this.props;
    return (
      <div className="product-container">
        {
          searchProducts.map((product) => (
            <Product
              key={ product.id }
              title={ product.title }
              id={ product.id }
              price={ product.price }
              thumbnail={ product.thumbnail }
            />))
        }
      </div>
    );
  }
}

AllProducts.propTypes = {
  searchProducts: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default AllProducts;
