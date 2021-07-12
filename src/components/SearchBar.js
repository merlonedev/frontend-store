import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <label htmlFor="search-bar">
          Pesquisar
          <input className="search-bar" id="search-bar" type="text" />
        </label>
      </div>
    );
  }
}

export default SearchBar;
