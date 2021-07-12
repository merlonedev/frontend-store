import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListItens from './pages/ListItens';
import CartItems from './pages/CartItems';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ ListItens } />
        <Route path="/cart" exact component={ CartItems } />
      </Switch>
    </Router>
  );
}

export default App;
