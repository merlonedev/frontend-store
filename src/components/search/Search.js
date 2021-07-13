import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  render() {
    const { searchText, eventHandler, searchHandler } = this.props;
    return (
      <form>
        <label htmlFor="searchText">
          <input
            data-testid="query-input"
            placeholder=""
            onChange={ eventHandler }
            name="searchText"
            value={ searchText }
          />
        </label>
        <button onClick={ searchHandler } data-testid="query-button" type="button">
          Buscar
        </button>
      </form>
    );
  }
}

Search.propTypes = {
  searchText: PropTypes.string.isRequired,
  eventHandler: PropTypes.func.isRequired,
  searchHandler: PropTypes.func.isRequired,
};

export default Search;
