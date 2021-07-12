import React from 'react';
import './App.css';
import { getCategories } from './services/api';

class App extends React.Component {
  render() {
    getCategories()
  }
}

export default App;
