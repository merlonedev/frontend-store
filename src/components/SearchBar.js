import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <label htmlFor="search-text" data-testid="home-initial-message">
          <input type="text" name="search-text" />
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
        <button type="button">
          <Link data-testid="shopping-cart-button" to="/ShoppingCart">carrinho</Link>
        </button>
      </div>
    );
  }
}

export default SearchBar;
