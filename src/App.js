import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import SideBar from './components/SideBar';
import Main from './pages/Main';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <SearchBar />
      <SideBar />
      <Route exact path="/" component={ Main } />
    </BrowserRouter>
  );
}

export default App;
