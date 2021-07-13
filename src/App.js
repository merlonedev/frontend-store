import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';
import ShoppingCard from './components/ShoppingCard';
import ShoppingCardIcone from './components/ShoppingCardIcone';
// import * as api from './components/services/api';

class App extends Component {
  render() {
    // api.getCategories();
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ ProductList } />
          <Route exact path="/shopping-cart" component={ ShoppingCard } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
