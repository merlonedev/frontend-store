import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Checkout from './pages/Checkout';
import Details from './pages/Details';
import Main from './pages/Main';
import ShoppingCart from './pages/ShoppingCart';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route to="/checkout" component={ Checkout } />
          <Route to="/details" component={ Details } />
          <Route to="/cart" component={ ShoppingCart } />
          <Route exact to="/" component={ Main } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
