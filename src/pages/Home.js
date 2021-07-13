import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <label htmlFor="search-input">
          <input type="text" id="search-input" />
        </label>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <Link
          className="material-icons carrinho"
          to="/carrinho"
          data-testid="shopping-cart-button"
        />
        shopping_cart
      </div>
    );
  }
}

export default Home;
