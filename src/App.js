import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';
import ProductDetails from './components/ProductDetails';
import CategoryPage from './components/CategoryPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/ShoppingCart" component={ ShoppingCart } />
          <Route exact path="/detalhes/:title/:id" component={ ProductDetails } />
          <Route exatc path="/categorias/:categoria" component={ CategoryPage } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
