import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import CartPages from './Pages/CartPages';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/" component={ CartPages } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
