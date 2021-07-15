import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';
import ProductDetails from './components/ProductDetails';
import CategoryPage from './components/CategoryPage';

class App extends Component {
  constructor() {
    super();
    this.state = { cartItens: [] };
    this.cartAdd = this.cartAdd.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  cartAdd(product) {
    this.setState((prevState) => ({
      cartItens: [...prevState.cartItens, product],
    }));
  }

  removeItem(product) {
    this.setState((prevState) => {
      const { cartItens } = prevState;
      const delFilter = cartItens.filter((cartItem) => cartItem.id !== product);
      return { cartItens: delFilter };
    });
  }

  render() {
    const { cartItens } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ (props) => <Home { ...props } cartAdd={ this.cartAdd } /> }
          />
          <Route
            exact
            path="/shoppingcart"
            render={ (props) => (<ShoppingCart
              { ...props }
              removeItem={ this.removeItem }
              cartAdd={ cartItens }
            />) }
          />
          <Route
            exact
            path="/detalhes/:title/:id"
            render={ (props) => (<ProductDetails
              { ...props }
              cartAdd={ this.cartAdd }
            />) }
          />
          <Route
            exact
            path="/categorias/:categoria"
            render={ (props) => (<CategoryPage
              { ...props }
              cartAdd={ this.cartAdd }
            />) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
