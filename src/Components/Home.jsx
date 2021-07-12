import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/Cart" data-testid="shopping-cart-button" />
          <label htmlFor="searchText" data-testid="home-initial-message">
            <input type="text" name="seachText" className="searchInput" />
            Digite algum termo de pesquisa ou escolha uma categoria.
          </label>
        </header>
      </div>
    );
  }
}
export default Home;
