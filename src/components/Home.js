import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import Category from './Catergory';

class Home extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Link to="/shoppingcart" data-testid="shopping-cart-button">Carrinho</Link>
        <Category />
      </div>
    );
  }
}

export default Home;
