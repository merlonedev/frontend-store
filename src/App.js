import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import ShoppingCart from './components/ShoppingCart';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/ShoppingCart" component={ ShoppingCart } />
        <Route exact path="/" component={ Home } />
      </BrowserRouter>
    );
  }
}

export default App;
