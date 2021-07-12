import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import ShoppingCart from './pages/ShoppingCart';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/shopping-cart" component={ ShoppingCart } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
