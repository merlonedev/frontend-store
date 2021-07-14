import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/productDetails/:id"
          render={ (props) => <ProductDetails { ...props } /> }
        />
        <Route exact path="/cart" component={ Cart } />
        <Route exact path="/" component={ HomePage } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
