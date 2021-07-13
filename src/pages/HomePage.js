import React from 'react';
import CartButton from '../components/CartButton';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <CartButton />
      </div>
    );
  }
}

export default HomePage;
