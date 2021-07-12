import React from 'react';
import CartButton from '../components/CartButton';
import Categorias from '../components/Categorias';

class Home extends React.Component {
  render() {
    return (
      <header>
        <label htmlFor="searchBar" data-testid="home-initial-message">
          <input name="searchBar" type="text" />
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
        <CartButton />
        <Categorias />
      </header>
    );
  }
}

export default Home;
