import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';
import ShoppingCard from './components/ShoppingCard';

class App extends Component {
  render() {
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
