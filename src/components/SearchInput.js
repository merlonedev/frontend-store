import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartItems from './CartItems';

class SearchInput extends Component {
  render() {
    const { onChange, name, onClick } = this.props;
    return (
      <div>
        <div className="search-container">
          <div className="search">
            <input
              name={ name }
              type="text"
              data-testid="query-input"
              onChange={ onChange }
            />
            <button
              type="button"
              data-testid="query-button"
              onClick={ onClick }
            >
              BUSCAR
            </button>
          </div>
          <div>
            <CartItems />
          </div>
        </div>
        <p>
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SearchInput;
