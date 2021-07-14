import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Cart from './Components/Cart';
import ProductDetails from './Components/ProductDetails';
import './App.css';

class App extends React.Component {
  async componentDidUpdate() {
    document.title = 'Undefined - Group 28';
  }

  render() {
    return (
      <main className="main">
        <BrowserRouter>
          <Switch>
            <Route path="/Cart" component={ Cart } />
            <Route
              exact
              path="/"
              render={ (props) => <Home { ...props } /> }
            />
            <Route
              path="/product-detail/:categoryId/:id"
              render={ (props) => <ProductDetails { ...props } /> }
            />
          </Switch>
        </BrowserRouter>
      </main>
    );
  }
}
export default App;