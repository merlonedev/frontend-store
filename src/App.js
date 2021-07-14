import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCartPage from './pages/ShoppingCartPage';
import ProductDetails from './pages/ProductDetails';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/cart" component={ ShoppingCartPage } />
            <Route path="/product/:id/:pid" component={ ProductDetails } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
