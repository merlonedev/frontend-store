import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchBar from './Components/SearchBar';
import FilterCategories from './Components/FilterCategories';
import './App.css';
import ShoppingCartButton from './Components/ShoppingCartButton';
import ShoppingCart from './Components/ShoppingCart';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <FilterCategories />
        <BrowserRouter>
          <ShoppingCartButton />
          <Switch>
            <Route path="/shopping-cart" component={ ShoppingCart } />
            <Route exact path="/" component={ SearchBar } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
