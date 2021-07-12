import React from 'react';

class ListItens extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="search-bar">
            <input id="search-bar" type="text" />
          </label>
        </form>
        <div data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </div>
      </div>
    );
  }
}

export default ListItens;
