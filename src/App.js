import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';
import Cart from './pages/Cart';

function App() {
  return (
    <BrowserRouter>
      <Route path="/cart" component={ Cart } />
      <Route exact path="/" component={ HomePage } />
    </BrowserRouter>
  );
}

export default App;
