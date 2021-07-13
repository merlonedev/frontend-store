import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  render() {
    const { searchText, eventHandler } = this.props;
    return (
      <label htmlFor="searchText">
        <input
          placeholder=""
          onChange={ eventHandler }
          name="searchText"
          value={ searchText }
        />
      </label>
    );
  }
}

Search.propTypes = {
  searchText: PropTypes.string.isRequired,
  eventHandler: PropTypes.func.isRequired,
};

export default Search;
