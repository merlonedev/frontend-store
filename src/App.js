import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      shoppingCart: [],
    };
    this.addToShoppingCart = this.addToShoppingCart.bind(this);
    this.getProducts = this.getProducts.bind(this);
  }

  getProducts(products) {
    this.setState({
      products,
    });
  }

  addToShoppingCart({ target: { id } }) {
    const { products } = this.state;
    const product = products.find((e) => e.id === id);
    this.setState(({ shoppingCart }) => ({
      shoppingCart: [...shoppingCart, product],
    }));
  }

  render() {
    const { shoppingCart } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/productDetail/:id"
            render={ (props) => (<ProductDetails
              { ...props }
              addToShoppingCart={ this.addToShoppingCart }
            />) }
          />
          <Route
            exact
            path="/shoppingCart"
            render={ (props) => (<ShoppingCart
              { ...props }
              shoppingCart={ shoppingCart }
            />) }
          />
          <Route
            exact
            path="/"
            render={ (props) => (<Home
              { ...props }
              getProducts={ this.getProducts }
              addToShoppingCart={ this.addToShoppingCart }
            />) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
