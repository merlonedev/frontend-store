import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import CartBasket from './pages/CartBasket';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ Home } />
        <Route path="/cart-basket" component={ CartBasket } />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
