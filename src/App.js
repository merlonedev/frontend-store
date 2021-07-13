import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Category from './components/Category';
import ShoppingCart from './components/ShoppingCart';
import ProductList from './components/ProductList';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Category />
        <Route exact path="/ShoppingCart" component={ ShoppingCart } />
        <Route exact path="/" component={ ProductList } />
      </BrowserRouter>
    );
  }
}
export default App;
