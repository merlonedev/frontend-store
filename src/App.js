import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import Main from './pages/Main';
import './App.css';
// import { getCategories } from './services/api';

function App() {
  return (
    <BrowserRouter>
      <SearchBar />
      <Route exact path="/" component={ Main } />
    </BrowserRouter>
  );
}

export default App;
