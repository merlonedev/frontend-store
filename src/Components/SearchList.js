import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class SearchList extends Component {
  render() {
    const { products } = this.props;

    if (products) {
      console.log(products);
      return (
        products.map((product) => (
          <section key={ product.id }>
            <ProductCard key={ product.id } product={ product } />
          </section>
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
