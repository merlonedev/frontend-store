import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchInput extends Component {
  render() {
    const { handleChange, handleClick, value } = this.props;
    return (
      <form>
        <fieldset>
          <input
            value={ value }
            onChange={ handleChange }
            type="text"
            data-testid="query-input"
          />
          <button
            type="button"
            aria-label="search"
            onClick={ handleClick }
            data-testid="query-button"
          >
            Procurar
          </button>
          <h2 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h2>
        </fieldset>
      </form>
    );
  }
}

SearchInput.propTypes = {
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
  value: PropTypes.string,
}.isRequired;

export default SearchInput;
