import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
import './App.css';
// App
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      shoppingCart: [],
    };
    this.addToShoppingCart = this.addToShoppingCart.bind(this);
    this.getProducts = this.getProducts.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
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

  removeProduct(products) {
    const { id } = products;
    this.setState((prev) => {
      const { shoppingCart } = prev;
      const filter = shoppingCart.filter((product) => product.id !== id);
      return { shoppingCart: filter };
    });
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
              removeProduct={ this.removeProduct }
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
