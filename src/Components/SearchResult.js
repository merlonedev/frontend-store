import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class SearchResult extends React.Component {
  render() {
    const { products } = this.props;

    if (products.length !== 0) {
      return (
        products.map((current) => (
          <Link
            data-testid="product-detail-link"
            to={ {pathname: '/card', state: current} }
            key={ current.id }
            id={ current.id }
            onClick={ this.handleClick }
            data-testid="product"
          >
            <img src={ current.thumbnail } alt="Product" />
            <p>
              { current.title }
              Preço:
              { current.price }
            </p>
          </Link>
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
  getEspecifyProducts: PropTypes.func.isRequired,
};

export default SearchResult;
