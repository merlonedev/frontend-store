import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      product: [],
    };
  }

  handleClick(id, title, price) {
    this.setState((state) => ({
      ...state,
      product: [id, title, price],
    }));
  }

  render() {
    const { handleClick } = this;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={
              (reactRouterProps) => (
                <Home { ...reactRouterProps } onClick={ handleClick } />)
            }
          />
          <Route path="/shopping-cart" component={ ShoppingCart } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
