import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart';
import ProdutcList from './components/ProductList';
import Category from './components/Category';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Category />
        <Route exact path="/" component={ ProdutcList } />
        <Route exact path="/Shoppingcart" component={ ShoppingCart } />
      </BrowserRouter>
    );
  }
}
export default App;
