import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <header className="header">
          <Link to="/Cart" data-testid="shopping-cart-button" />
          <label
            htmlFor="searchText"
            data-testid="home-initial-message"
            className="searchText"
          >
            <input
              type="text"
              name="seachText"
              className="searchInput"
              placeholder="Search"
            />
            Digite algum termo de pesquisa ou escolha uma categoria.
          </label>
        </header>
      </div>
    );
  }
}
export default Home;
