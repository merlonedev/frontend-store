import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <label data-testid="home-initial-message" htmlFor="search-bar">
          <input type="text" id="search-bar" />
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
      </div>
    );
  }
}

export default SearchBar;
