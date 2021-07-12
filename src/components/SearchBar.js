import React, { Component } from 'react';
import cartImage from '../assets/carro.svg'
import { Link } from 'react-router-dom';
import './SearchBar.css';

class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <label className="search-bar-label" htmlFor="search-bar">
          Pesquisar
          <input className="search-bar-input" id="search-bar" type="text" />
          <Link to="/Cart" data-testid="shopping-cart-button">
            <img src={ cartImage } alt="Carrinho de compra" className="cart-img"/>
          </Link>
        </label>
      </div>
    );
  }
}

export default SearchBar;
