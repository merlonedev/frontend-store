import React from 'react';

class ListItens extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" />
        </form>
        <div data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </div>
      </div>
    );
  }
}

export default ListItens;