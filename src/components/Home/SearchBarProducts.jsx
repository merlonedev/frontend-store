import React from 'react';
import PropTypes from 'prop-types';
import CartButton from '../ShoppingCart/CartButton';

class SearchBarProducts extends React.Component {
  render() {
    const { handleChange, handleClick } = this.props;
    return (
      <div>
        <div className="search-container">
          <div className="search">
            <input
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
            <CartButton />
          </div>
        </div>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
      </div>
    );
  }
}

SearchBarProducts.propTypes = {
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
}.isRequired;

export default SearchBarProducts;
