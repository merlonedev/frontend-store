import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <h2>Frontend Online Store - Grupo 26</h2>
        <Switch>
          <Route path="/" component={ Home } />
        </Switch>
      </BrowserRouter>
    );
  }
}
