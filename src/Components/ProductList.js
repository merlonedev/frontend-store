import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductList extends Component {
  render() {
    const { products } = this.props;
    return (
      <main>
        { products.map((product) => (
          <ProductCard product={ product } key={ product.id } />
        )) }
      </main>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(Object).isRequired,
};

export default ProductList;
