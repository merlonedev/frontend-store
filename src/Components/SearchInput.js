import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonCart from './ButtonCart';

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
          <ButtonCart />
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
