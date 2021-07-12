import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Index from './components/Index';
import Cart from './components/ShoppingCart';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/cart" component={ Cart } />
          <Route path="/" component={ Index } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
