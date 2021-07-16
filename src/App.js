import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';
import ProductDetails from './components/ProductDetails';
import CategoryPage from './components/CategoryPage';
import FinishPage from './components/FinishPage';

class App extends Component {
  constructor() {
    super();
    this.state = { cartItens: [], totalQuantity: 0 };
    this.cartAdd = this.cartAdd.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.quantitySum = this.quantitySum.bind(this);
    this.quantitySub = this.quantitySub.bind(this);
  }

  cartAdd(product) {
    this.setState((prevState) => ({
      cartItens: [...prevState.cartItens, product],
      totalQuantity: prevState.cartItens.length + 1,
    }));
  }

  removeItem(product) {
    this.setState((prevState) => {
      const { cartItens } = prevState;
      const delFilter = cartItens.filter((cartItem) => cartItem.id !== product);
      return { cartItens: delFilter };
    });
  }

  quantitySum(id) {
    this.setState((prevState) => ({
      [id]: prevState[id] ? prevState[id] + 1 : 2,
      totalQuantity: prevState.totalQuantity + 1,
    }));
  }

  quantitySub(id, quantidade) {
    if (quantidade === 1) {
      return;
    }
    this.setState((prevState) => ({
      [id]: prevState[id] ? prevState[id] - 1 : 1,
      totalQuantity: prevState.totalQuantity === 1 ? 1 : prevState.totalQuantity - 1,
    }));
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
              quantitySum={ this.quantitySum }
              quantitySub={ this.quantitySub }
              estado={ this.state }
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
          <Route
            exact
            path="/finalizarcompra"
            render={ (props) => (<FinishPage
              { ...props }
              cartItens={ cartItens }
            />) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
