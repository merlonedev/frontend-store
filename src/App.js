import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
import Header from './Components/Header';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
    };

    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(product) {
    this.setState((prevState) => ({
      productList: [...prevState.productList, product] }));
  }

  render() {
    const { productList } = this.state;
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            exact
            path="/productDetail/:id"
            render={ (props) => <ProductDetails { ...props } /> }
          />
          <Route
            exact
            path="/cart"
            render={ (props) => (<ShoppingCart
              { ...props }
              productList={ productList }
            />) }
          />
          <Route
            exact
            path="/"
            render={ (props) => (<Home
              { ...props }
              addToCart={ this.addToCart }
            />) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
