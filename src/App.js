import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import CartBasket from './pages/CartBasket';
import ProductDetails from './pages/ProductDetails';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/cart-basket" component={ CartBasket } />
          <Route
            path="/product-details/:categoryId/:id"
            component={ ProductDetails }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
