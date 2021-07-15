import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../Icons/CartIcon';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <label htmlFor="label-input-search">
          <input data-testid="input-search" />
        </label>
        <CartIcon />
        <div>
          <h4
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h4>
        </div>
        <Link data-testid="shopping-cart-button" to="/ShoppingCart">VER CARRINHO</Link>
      </div>
    );
  }
}

export default SearchBar;
