import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SearchBar from './Pages/SearchBar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ SearchBar } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
