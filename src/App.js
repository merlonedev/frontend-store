import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListItens from './pages/ListItens';
import CartItems from './pages/CartItems';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ ListItens } />
        <Route path="/cart" exact component={ CartItems } />
        <Route
          path="/item/:categoryId/:productId"
          render={ (props) => (<ProductDetails { ...props } />) }
        />
      </Switch>
    </Router>
  );
}

export default App;
