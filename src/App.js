import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Checkout from './pages/Checkout';
import Details from './pages/Details';
import Main from './pages/Main';
import ShoppingCart from './pages/ShoppingCart';
import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/checkout" component={ Checkout } />
          <Route exact path="/details" component={ Details } />
          <Route exact path="/cart" component={ ShoppingCart } />
          <Route exact path="/" component={ Main } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
