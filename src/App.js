import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './styles/bootstrap.min.css';

import Home from './pages/Home';
import DetailedProduct from './components/DetailedProduct';
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './pages/Checkout';
import GlobalStyle from './styles/global';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
          <Route
            path="/product/:id/:title"
            component={ DetailedProduct }
          />
          <Route path="/shopping-cart" component={ ShoppingCart } />
          <Route path="/checkout" render={ () => <Checkout /> } />
          <Route exact path="/" component={ Home } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
