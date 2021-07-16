import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import CartPages from './Pages/CartPages';
import ProductDetails from './Pages/ProductDetails';
import './App.css';
import './ProductDetails.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/Pages/CartPages" component={ CartPages } />
        <Route path="/product/:id" component={ ProductDetails } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
