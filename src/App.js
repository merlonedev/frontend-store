import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import Cart from './pages/Cart';
import SideBar from './components/SideBar';
import Main from './pages/Main';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <SearchBar />
      <Route exact path="/" component={ Main } />
      <Route exact path="/Cart" component={ Cart } />
      <SideBar />
    </BrowserRouter>
  );
}

export default App;
