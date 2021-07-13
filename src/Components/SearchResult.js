import React from 'react';
import PropTypes from 'prop-types';

import ProductCard from './ProductCard';

class SearchResult extends React.Component {
  getProductToAddInCart(product) {
    console.log(product);
  }

  render() {
    const { products } = this.props;

    if (products.length !== 0) {
      return (
        products.map((current) => (
          <ProductCard
            key={ current.id }
            product={ current }
            addToCart={ this.getProductToAddInCart }
          />
        ))
      );
    }
    return (
      <div data-testid="product"> </div>
    );
  }
}

SearchResult.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default SearchResult;
