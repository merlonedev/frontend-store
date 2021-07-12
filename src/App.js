import React from 'react';
import './App.css';
import Home from './components/Home';
import CategoryList from './components/CategoryList';
import SearchAndList from './components/SearchAndList';

function App() {
  return (
    <div className="App">
      <Home />
      <CategoryList />
      <SearchAndList />
    </div>
  );
}

export default App;
