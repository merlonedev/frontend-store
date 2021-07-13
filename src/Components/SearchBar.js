import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <input
          type="text"
        />
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        { console.log('searchBar') }
      </div>
    );
  }
}
export default SearchBar;
