import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Products from './Products';

class ProductFilter extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        { products.map((product) => (
          <Products
            key={ product.id }
            title={ product.title }
            img={ product.thumbnail }
            price={ product.price }
          />
        ))}
      </div>
    );
  }
}

ProductFilter.propTypes = {
  products: PropTypes.arrayOf(Object).isRequired,
};

export default ProductFilter;
