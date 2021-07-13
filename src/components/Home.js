import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

class Home extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <header>
          <Link to="/ShoppingCart" data-testid="shopping-cart-button">
            Carrinho
          </Link>
        </header>
      </div>
    );
  }
}

export default Home;
