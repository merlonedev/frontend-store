import React from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from './services/api';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {getCategories()}
      {getProductsFromCategoryAndQuery('MLB5672', 'Acessórios para Veículos')}
    </div>
  );
}

export default App;
