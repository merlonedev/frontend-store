import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
// import * as api from './services/api';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/CartPage" component={ CartPage } />
        </Switch>
      </Router>
    );
  }
}

export default App;
