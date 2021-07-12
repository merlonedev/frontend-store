import React from 'react';
import { Link } from 'react-router-dom';
import getCategories from '../services/api';

class Home extends React.Component {
  componentDidMount() {
    getCategories();
  }

  render() {
    return (
      <section>
        <Link
          to="/shopping-cart"
          data-testid="shopping-cart-button"
        >
          Carrinho de Compras
        </Link>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </section>
    );
  }
}

export default Home;
