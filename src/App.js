import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Cart from './Components/Cart';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <main className="">
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
