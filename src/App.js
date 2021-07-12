import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <main className="">
        <header>
          <label htmlFor="searchText" data-testid="home-initial-message" className="labelSeach">
            <input type="text" name="seachText" className="searchInput" />
            Digite algum termo de pesquisa ou escolha uma categoria.
          </label>
        </header>
      </main>
    );
  }
}

export default App;
