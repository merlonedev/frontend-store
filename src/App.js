import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
import './App.css';

class App extends Component {
  // MLB1370656442 id test
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/productDetail/:id"
            render={ (props) => <ProductDetails /> }
          />
          <Route exact path="/cart" component={ ShoppingCart } />
          <Route exact path="/" component={ Home } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
