import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" />
        <SearchBar />
      </BrowserRouter>
    );
  }
}
