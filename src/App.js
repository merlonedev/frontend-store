import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Carrinho from './pages/carrinho/Carrinho';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/shopping-cart" component={ Carrinho } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
