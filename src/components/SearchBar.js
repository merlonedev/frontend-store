import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { onChange, onClick } = this.props;

    return (
      <div className="search-input-container">
        <div className="search-bar">
          <span className="material-icons magnifier">search</span>
          <label htmlFor="search" className="search-label">
            <input
              type="text"
              className="search-input"
              data-testid="query-input"
              id="search"
              onChange={ onChange }
            />
          </label>
          <button
            type="button"
            className="search-button"
            data-testid="query-button"
            onClick={ onClick }
          >
            Pesquisar
          </button>
        </div>
        <Link
          className="material-icons cart search-cart"
          data-testid="shopping-cart-button"
          to="/cart"
        >
          shopping_cart
        </Link>
      </div>
    );
  }
}

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SearchBar;
