import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';
import CategoryPage from './components/CategoryPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={ Home } />
        <Route exact path="/ShoppingCart" component={ ShoppingCart } />
        <Route exatc path="/categorias/:categoria" component={ CategoryPage } />
      </BrowserRouter>
    );
  }
}

export default App;
