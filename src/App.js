import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ProductsPage, ShoppingCart, ProductDetail, Checkout } from './pages';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/shoppingcart" component={ ShoppingCart } />
        <Route exact path="/" component={ ProductsPage } />
        <Route exact path="/product/:id" component={ ProductDetail } />
        <Route exact path="/checkout" component={ Checkout } />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
