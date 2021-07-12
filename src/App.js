import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Category from './components/Category';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ HomePage } />
      <Category />
    </BrowserRouter>
  );
}

export default App;
