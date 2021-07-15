import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from './pages/Home';
import DetailedProduct from './components/DetailedProduct';
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/product/:id/:title"
          component={ DetailedProduct }
        />
        <Route path="/shopping-cart" component={ ShoppingCart } />
        <Route path="/checkout" render={ () => <Checkout /> } />
        <Route exact path="/" component={ Home } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
