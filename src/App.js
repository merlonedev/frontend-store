import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListItens from './pages/ListItens';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ ListItens } />
      </Switch>
    </Router>
  );
}

export default App;
