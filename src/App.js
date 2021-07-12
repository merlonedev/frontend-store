import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import SideBar from './components/SideBar';
import Main from './pages/Main';
import './App.css';
import ItemDetails from './pages/ItemDetails';

function App() {
  return (
    <BrowserRouter>
      <SearchBar />
      <Route exact path="/" component={ Main } />
      <Route path="/details/:id" render={ (props) => <ItemDetails { ...props } /> } />
      <SideBar />
    </BrowserRouter>
  );
}

export default App;
