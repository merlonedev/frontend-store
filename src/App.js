import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ProductList from './components/ProductList';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={ ProductList } />
      </Router>
    );
  }
}

export default App;
