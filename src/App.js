import React from 'react';
import './App.css';
import Home from './components/Home';
import Search from './components/Search';
import ButtonToCart from './components/ButtonToCart';

function App() {
  return (
    <div className="App">
      <Home />
      <ButtonToCart />
      <Search />
    </div>
  );
}

export default App;
