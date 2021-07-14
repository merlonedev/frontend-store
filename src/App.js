import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ShoppingCart from './Components/ShoppingCart';
import Card from './pages/Card';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={
                (props) => (
                  <Home
                    { ...props }
                  />)
              }
            />
            <Route exact path="/shopping-cart" component={ ShoppingCart } />
            <Route
              exact
              path="/card/"
              render={ (props) => (
                <Card
                  { ...props }
                />) }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
