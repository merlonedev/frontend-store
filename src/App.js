import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import CartProduct from './components/CartProduct';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ ProductList } />
            <Route path="/cart" component={ CartProduct } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
