import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import CartBasket from './pages/CartBasket';
import ProductDetails from './pages/ProductDetails';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cartList: [],
    };

    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(item) {
    this.setState((prevState) => ({
      cartList: [...prevState.cartList, item],
    }));
  }

  render() {
    const { cartList } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/cart-basket"
            render={ (props) => <CartBasket { ...props } cartList={ cartList } /> }
          />
          <Route
            exact
            path="/"
            render={ (props) => <Home { ...props } addToCart={ this.addToCart } /> }
          />
          <Route
            path="/product-details/:categoryId/:id"
            component={ ProductDetails }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
