import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import Category from './components/Category';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={ SearchBar } />
        <Category />
      </BrowserRouter>
    );
  }
}
export default App;
