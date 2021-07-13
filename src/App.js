import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router';
import SearchBar from './components/SearchBar';
import ShoppingCart from './components/ShoppingCart';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductList from './components/ProductList';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={ ProductList } />
        <Route exact path="/ShoppingCart" component={ ShoppingCart } />
      </BrowserRouter>
    );
  }
}

export default App;
