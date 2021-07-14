import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductList extends Component {
  render() {
    const { products } = this.props;
    return (
      <main>
        { products.map((product) => (
          <ProductCard data-testid="product" product={ product } key={ product.id } />
        )) }
      </main>
    );
  }
}
//PropType errado
ProductList.propTypes = {
  products: PropTypes.objectOf().isRequired,
};

export default ProductList;
