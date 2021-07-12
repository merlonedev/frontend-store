import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import ShoppingCart from './pages/ShoppingCart';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/shoppingcart" component={ ShoppingCart } />
        <Route exact path="/" component={ ProductsPage } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
