import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListItens from './pages/ListItens';
import CartItems from './pages/CartItems';

function App() {
  console.log(ListItens.state);
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ ListItens } />
        <Route
          path="/cart"
          exact
          render={
            (props) => <CartItems {...props} cartItens={ ListItens.state.cartItens } /> 
            } />
      </Switch>
    </Router>
  );
}

export default App;
