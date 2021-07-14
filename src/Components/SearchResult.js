import React from 'react';
import PropTypes from 'prop-types';

import ProductCard from './ProductCard';

class SearchResult extends React.Component {
  constructor(props) {
    super(props);

    this.getProductToAddInCart = this.getProductToAddInCart.bind(this);
  }

  getProductToAddInCart(product) {
    const { addToCart } = this.props;
    addToCart(product);
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
  addToCart: PropTypes.func.isRequired,
};

export default SearchResult;
