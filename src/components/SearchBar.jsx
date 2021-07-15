import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartIcon from '../Icons/CartIcon';

class SearchBar extends Component {
  render() {
    const { onChange, inputText } = this.props;
    return (
      <div>
        <label data-testid="input-search" htmlFor="label-input-search">
          <input
            name="inputText"
            value={ inputText }
            data-testid="query-input"
            onChange={ onChange }
          />
        </label>
        <CartIcon />
        <div>
          <h4
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h4>
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  inputText: PropTypes.string.isRequired,
};

export default SearchBar;
