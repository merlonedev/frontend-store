import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Cart from './Components/Cart';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    document.title = 'Undefined - Group 28';
  }

  render() {
    return (
      <main className="main">
        <div>
          <BrowserRouter>
            <Switch>
              <Route path="/Cart" component={ Cart } />
              <Route path="/" component={ Home } exact />
            </Switch>
          </BrowserRouter>
        </div>
      </main>
    );
  }
}
export default App;
