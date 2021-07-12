import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route to="/" component={ ProductsPage } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
