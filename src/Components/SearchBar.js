import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchMsg from './SearchMsg';

class SearchBar extends Component {
  render() {
    const { value, change, products, click } = this.props;
    if (products.length === 0) return <SearchMsg />;
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
      </section>
    );
  }
}

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(Object).isRequired,
  change: PropTypes.func.isRequired,
  click: PropTypes.func.isRequired,
};

export default SearchBar;
