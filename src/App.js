import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import ShoppingCart from './components/ShoppingCart';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <SearchBar />
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
        <Route exact path="/" />
        <Route exact path="/cart" component={ ShoppingCart } />
      </BrowserRouter>
    );
  }
}
