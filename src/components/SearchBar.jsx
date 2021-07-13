import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <label htmlFor="label-imput-search">
          <input data-testid="imput-search" />
        </label>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          <img
            src="https://img.flaticon.com/icons/png/512/126/126510.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"
            alt="carrinho de compras"
          />
        </Link>
        <div>
          <h4
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h4>
        </div>
      </div>
    );
  }
}

export default SearchBar;
