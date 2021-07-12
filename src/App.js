import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import CartBasket from './pages/CartBasket';
import Categorias from './Components/Categorias';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/cart-basket" component={ CartBasket } />
          <Route path="/" component={ Home } />
          <Categorias />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
