import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductList from './ProductList';
import SearchMsg from './SearchMsg';
import Loading from './Loading';

class SearchBar extends Component {
  render() {
    const { value, products, loading, change, click } = this.props;
    if (loading) return <Loading />;

    return (
      <section>
        <input
          type="search"
          onChange={ change }
          value={ value }
          data-testid="query-input"
        />
        <button
          type="button"
          onClick={ click }
          data-testid="query-button"
          name="searchButton"
        >
          Search
        </button>

        {
          (products.length === 0)
            ? <SearchMsg />
            : <ProductList value={ value } products={ products } />
        }

      </section>
    );
  }
}

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(Object).isRequired,
  loading: PropTypes.bool.isRequired,
  change: PropTypes.func.isRequired,
  click: PropTypes.func.isRequired,
};

export default SearchBar;
