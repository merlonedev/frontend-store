import React from 'react';
import { Link } from 'react-router-dom';
import Categories from './categoriesList';

// Cria input do tipo texto e adicionar uma tag p dando instruções iniciais e o renderiza no App.
class Index extends React.Component {
  render() {
    return (
      <>
        <input
          type="text"
        />
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        {/* Criado um link para que ao ser clicado redirecionar
        para o component ShoppingCart */}
        <Link data-testid="shopping-cart-button" to="/cart">Carrinho</Link>
        <Categories />
      </>
    );
  }
}

export default Index;
