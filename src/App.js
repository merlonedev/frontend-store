import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            to="/"
            component={ ProductList }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
