import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import Main from './pages/Main';
import Cart from './pages/Cart';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <SearchBar />
      <Route exact path="/" component={ Main } />
      <Route exact path="/Cart" component={ Cart } />
    </BrowserRouter>
  );
}

export default App;
