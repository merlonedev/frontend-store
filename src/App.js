import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchAndResults from './Components/SearchAndResults';
import ShoppingCartButton from './Components/ShoppingCartButton';
import ShoppingCart from './Components/ShoppingCart';

function App() {
  return (
    <div>
      <BrowserRouter>
        <ShoppingCartButton />
        <Switch>
          <Route path="/shopping-cart" component={ ShoppingCart } />
          <Route exact path="/" component={ SearchAndResults } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
