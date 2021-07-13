import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotFound from './NotFound';
import ProductCard from './ProductCard';

class SearchList extends Component {
  render() {
    const { products } = this.props;

    if (products === []) {
      return <NotFound />;
    }

    if (products) {
      return (
        products.map((product) => (
          <ProductCard key={ product.title } product={ product } />
        ))
      );
    }
  }
}

SearchList.propTypes = {
  products: PropTypes.array,
}.isRequired;

export default SearchList;
