import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './components/ShoppingCart';
import Categories from './components/Categories';

function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="Categories" component={ Categories } />
        <Route exact path="/" component={ Home } />
        <Route path="/shopping-cart" component={ ShoppingCart } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
