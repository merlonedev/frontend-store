import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart';
import ProductList from './components/ProductList';
import showCategory from './components/showCategory';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={ ProductList } />
        <Route exact path="/Shoppingcart" component={ ShoppingCart } />
        <Route exact path="/categorias/:categoria" component={ showCategory } />
      </BrowserRouter>
    );
  }
}
export default App;
