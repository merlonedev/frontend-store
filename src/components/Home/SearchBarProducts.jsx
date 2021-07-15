import React from 'react';
import PropTypes from 'prop-types';
import CartButton from '../ShoppingCart/CartButton';

class SearchBarProducts extends React.Component {
  render() {
    const { handleChange, handleClick } = this.props;
    return (
      <header className="header">
        <div className="search-container">
          <div className="search">
            <div className="input-search-container">
              <input
                className="input-search"
                name="query"
                type="text"
                data-testid="query-input"
                onChange={ handleChange }
              />
              <button
                type="button"
                data-testid="query-button"
                onClick={ handleClick }
              >
                Buscar
              </button>
            </div>
            <CartButton />
          </div>
        </div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </header>
    );
  }
}

SearchBarProducts.propTypes = {
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
}.isRequired;

export default SearchBarProducts;
