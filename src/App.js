import React from 'react';
import './App.css';
import Home from './components/Home';
import CategoryList from './components/CategoryList';
import Search from './components/Search';
import ButtonToCart from './components/ButtonToCart';

function App() {
  return (
    <div className="App">
      <Home />
      <CategoryList />
      <ButtonToCart />
      <Search />
    </div>
  );
}

export default App;
