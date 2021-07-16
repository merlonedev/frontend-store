import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import Details from './pages/details/Details';
import MarketButton from './components/marketButton/MarketButton';
import Checkout from './pages/checkout/Checkout';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <MarketButton />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/shopping-cart" component={ Cart } />
          <Route
            path="/details/:id"
            render={ (props) => <Details { ...props } /> }
          />
          <Route exact path="/checkout" component={ Checkout } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
