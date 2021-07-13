import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import CardList from './components/CardList';
import Main from './pages/Main';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <SearchBar />
      <Route exact path="/" component={ Main } />
      <CardList />
    </BrowserRouter>
  );
}

export default App;
