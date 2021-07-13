import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <label htmlFor="label-imput-search">
          <input data-testid="imput-search" />
        </label>
        <h4
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h4>
      </div>
    );
  }
}

export default SearchBar;
