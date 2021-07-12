import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import BuyCart from './components/buyCart';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={ SearchBar } />
        <Route exact path="/buyCart" component={ BuyCart } />
      </BrowserRouter>
    );
  }
}

export default App;
