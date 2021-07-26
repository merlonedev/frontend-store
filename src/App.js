import React, { Component } from 'react';
import SearchBar from './Components/SearchBar';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShoppingCartButton from './Components/ShoppingCartButton';
import ShoppingCart from './Components/ShoppingCart';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ShoppingCartButton />
        <Switch>
          <Route path="/shopping-cart" component={ ShoppingCart } />
          <Route exact path="/" component={ SearchBar } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
