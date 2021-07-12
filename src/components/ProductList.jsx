import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProductPage extends Component {
  render() {
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link to="/shoppingcart">
          <button data-testid="shopping-cart-button" type="button">Carrinho</button>
        </Link>
      </div>
    );
  }
}
