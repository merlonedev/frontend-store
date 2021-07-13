import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './pages/Home';
import DetailedProduct from './components/DetailedProduct';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/shopping-cart" component={ ShoppingCart } />
        <Route
          path="/product/:id/:title"
          component={ DetailedProduct }
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
