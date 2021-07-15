import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Checkout from './pages/Checkout';
import Details from './pages/Details';
import Main from './pages/Main';
import ShoppingCard from './components/ShoppingCard';
import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/shopping-cart" component={ ShoppingCard } />
          <Route exact path="/checkout" component={ Checkout } />
          <Route exact path="/details/:id" component={ Details } />
          <Route exact path="/cart" component={ ShoppingCard } />
          <Route exact path="/" component={ Main } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
