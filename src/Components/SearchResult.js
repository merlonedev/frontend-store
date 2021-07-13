import React from 'react';
import PropTypes from 'prop-types';

class SearchResult extends React.Component {
  render() {
    const { products } = this.props;

    if (products.length !== 0) {
      return (
        products.map((current) => (
          <div key={ current.id } data-testid="product">
            <img src={ current.thumbnail } alt="Product" />
            <p>
              { current.title }
              Preço:
              { current.price }
            </p>
          </div>
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
