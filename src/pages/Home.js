import React from 'react';
import CartButton from '../Components/CartButton';
import Category from '../Components/Categorias';

class Home extends React.Component {
  render() {
    return (
      <header>
        <label htmlFor="searchBar" data-testid="home-initial-message">
          <input name="searchBar" type="text" />
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
        <CartButton />
        <Category />
      </header>
    );
  }
}

export default Home;
