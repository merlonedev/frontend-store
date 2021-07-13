import React from 'react';
import './App.css';
// import Categories from './components/Categories';
import Home from './components/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ Home }/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
