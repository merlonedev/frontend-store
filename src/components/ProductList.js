import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductList extends Component {
  render() {
    return (
      <section>
        <input type="text" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <input type="button" />
        <Link data-testid="shopping-cart-button" to="/shopping-cart">
          Retorna
        </Link>
      </section>
    );
  }
}

export default ProductList;
