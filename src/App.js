import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
// import Categories from './Components/Categories';
import ShoppingCart from './pages/ShoppingCart';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      productsToAddInCart: [],
    };

    this.addAllProductsToCart = this.addAllProductsToCart.bind(this);
  }

  addAllProductsToCart(product) {
    const { productsToAddInCart } = this.state;
    const alredyExist = productsToAddInCart.find((current) => current.id === product.id);

    if (alredyExist) {
      alredyExist.quantityInCart += 1;
      return this.setState({
        productsToAddInCart: [...productsToAddInCart],
      });
    }

    this.setState({
      productsToAddInCart: [...productsToAddInCart, product],
    });
  }

  render() {
    const { productsToAddInCart } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={ (props) => (
                <Home { ...props } addProductsInCart={ this.addAllProductsToCart } />
              ) }
            />
            <Route
              exact
              path="/shopping-cart"
              render={ (props) => (
                <ShoppingCart { ...props } products={ productsToAddInCart } />
              ) }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
