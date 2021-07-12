import React, { Component } from 'react';
import CartIcon from './CartIcon';
import './SearchBar.css';

class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <label className="search-bar-label" htmlFor="search-bar">
          Pesquisar
          <input className="search-bar-input" id="search-bar" type="text" />
          <CartIcon />
        </label>
      </div>
    );
  }
}

export default SearchBar;
