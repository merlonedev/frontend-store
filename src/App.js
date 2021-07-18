import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import './App.css';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cartItems: [],
      quantityTotal: 0,
    };
    this.renderAddButtonCart = this.renderAddButtonCart.bind(this);
    this.getItemsFromStorage = this.getItemsFromStorage.bind(this);
    this.storeItems = this.storeItems.bind(this);
    this.getQuantityTotal = this.getQuantityTotal.bind(this);
  }

  getItemsFromStorage() {
    if (localStorage.getItem('ItemCart')) {
      let actualStorage = localStorage.getItem('ItemCart');
      actualStorage = JSON.parse(actualStorage);
      this.setState({
        cartItems: [...actualStorage],
      });
    } else {
      this.setState({
        cartItems: undefined,
      });
    }
  }

  // Requisito 13
  getQuantityTotal() {
    let quantityTotal = 0;
    const actualStorage = JSON.parse(localStorage.getItem('ItemCart'));
    if (actualStorage) {
      quantityTotal = actualStorage.reduce((acc, curr) => acc + curr.quantity, 0);
    }
    this.setState({
      quantityTotal,
    });
  }

  storeItems(product) {
    const myProduct = product;
    myProduct.quantity = 1;
    if (localStorage.getItem('ItemCart') !== null) {
      let actualStorage = JSON.parse(localStorage.getItem('ItemCart'));
      let count = 0;
      let index;
      actualStorage.forEach((item, ind) => {
        if (item.id === product.id) {
          index = ind;
          count += 1;
        }
      });
      if (count > 0) {
        const avaliableQuantity = 'available_quantity';
        const maxQuant = actualStorage[index][avaliableQuantity];
        if (actualStorage[index].quantity < maxQuant) {
          actualStorage[index].quantity += 1;
        }
      } else {
        actualStorage = [...actualStorage, myProduct];
      }
      localStorage.setItem('ItemCart', JSON.stringify(actualStorage));
    } else {
      localStorage.setItem('ItemCart', JSON.stringify([myProduct]));
    }
    this.getQuantityTotal();
  }

  renderAddButtonCart(product) {
    return (
      <button
        type="button"
        data-testid="product-detail-add-to-cart"
        onClick={ () => this.storeItems(product) }
      >
        Adicionar ao carrinho
      </button>
    );
  }

  render() {
    const { cartItems, quantityTotal } = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/product-details/:id"
            render={ (props) => (<ProductDetails
              { ...props }
              cartItems={ cartItems }
              renderAddButtonCart={ this.renderAddButtonCart }
              storeItems={ this.storeItems }
              getQuantityTotal={ this.getQuantityTotal }
              quantityTotal={ quantityTotal }
            />) }
          />
          <Route
            exact
            path="/shopping-cart"
            render={ (props) => (<Cart
              { ...props }
              cartItems={ cartItems }
              getItemsFromStorage={ this.getItemsFromStorage }
              storeItems={ this.storeItems }
            />) }
          />
          <Route
            exact
            path="/"
            render={ (props) => (<Home
              { ...props }
              storeItems={ this.storeItems }
              getQuantityTotal={ this.getQuantityTotal }
              quantityTotal={ quantityTotal }
            />) }
          />
          <Route
            path="/checkout"
            render={ (props) => (<Checkout
              { ...props }
              cartItems={ cartItems }
              storeItems={ this.storeItems }
              getItemsFromStorage={ this.getItemsFromStorage }
            />) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
