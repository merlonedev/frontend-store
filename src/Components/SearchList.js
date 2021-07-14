import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import NotFound from './NotFound';

class SearchList extends Component {
  render() {
    const { products } = this.props;

    if (products.length === 0) {
      return (<NotFound />);
    }

    return (
      products.map((product) => (
        <ProductCard key={ product.title } product={ product } />
      ))
    );
  }
}

SearchList.propTypes = {
  products: PropTypes.array,
}.isRequired;

export default SearchList;
