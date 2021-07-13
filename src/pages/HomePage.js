import React from 'react';
import CartButton from '../components/CartButton';
import CategoryList from '../components/CategoryList';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <CartButton />
        <CategoryList />
      </div>
    );
  }
}

export default HomePage;
