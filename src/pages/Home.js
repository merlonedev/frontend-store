import React from 'react';
import Categories from '../components/Categories';
import CartButton from '../components/CartButton';

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <header className="search-input-container">
          <label htmlFor="search-input">
            <input id="search-input" />
          </label>
          <CartButton />
        </header>
        <main className="main-content-container">
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </main>
        <Categories />
      </div>
    );
  }
}

export default Home;
