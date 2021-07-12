import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/shopping-cart" component={ Cart } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
