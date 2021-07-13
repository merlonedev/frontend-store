import React from 'react';
import List from '../Components/List';
import SearchResult from '../Components/SearchResult';

class Home extends React.Component {
  render() {
    return (
      <div>
        <List />
        <SearchResult />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default Home;
