import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Cart from './pages/Cart';
import ProductDetails from './components/ProductDetails';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ HomePage } />
          <Route path="/Cart" component={ Cart } />
          <Route
            path="/item/:categoryId/:productId"
            render={ (props) => (<ProductDetails { ...props } />) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
