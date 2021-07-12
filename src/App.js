import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import * as api from './services/api';
import List from './Components/List';

class App extends React.Component {
  render() {
    api.getCategories();
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={ List } />
          </Switch>
        </BrowserRouter>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default App;
