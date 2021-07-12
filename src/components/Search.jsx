import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Search extends Component {
  render() {
    const { onSearchChange, onSearchClick } = this.props;

    return (
      <section>
        <input
          data-testid="query-input"
          type="text"
          name="search"
          onChange={ onSearchChange }
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ onSearchClick }
        >
          Buscar
        </button>
      </section>
    );
  }
}

Search.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
  onSearchClick: PropTypes.func.isRequired,
};
