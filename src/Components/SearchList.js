import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import NotFound from './NotFound';
import ProductCard from './ProductCard';

class SearchList extends Component {
  render() {
    const { products } = this.props;

    // if (products === []) {
    //   return <NotFound />;
    // }

    if (products) {
      console.log(products);
      return (
        products.map((product) => (
          <ProductCard key={ product.title } product={ product } />
        ))
      );
    }
    return (
      <div>
        <span>
          Chegou aqui
        </span>
      </div>);
  }
}

SearchList.propTypes = {
  products: PropTypes.array,
}.isRequired;

export default SearchList;
