import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <h2>Frontend Online Store - Grupo 26</h2>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route
            path="/shopping-cart"
            render={ (props) => <ShoppingCart { ...props } /> }
          />
          <Route
            path="/product-details/:id"
            render={ (props) => <ProductDetails { ...props } /> }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
