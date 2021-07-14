import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
// import * as api from './services/api';
import './App.css';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/CartPage" component={ CartPage } />
          <Route
            path="/details/:id"
            render={ (props) => <ProductDetail { ...props } /> }
          />
          <Route exact path="/Checkout" component={ Checkout } />
        </Switch>
      </Router>
    );
  }
}

export default App;
