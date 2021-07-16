import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import ShoppingCart from './components/ShoppingCart';
import CategoriesBar from './components/CategoriesBar';
import ProductsList from './components/ProductsList';
import ProductDetails from './components/ProductDetails';
import CartSlider from './components/subcomponents/CartSlider';
import CompletePurchase from './components/CompletePurchase';
import Checkout from './components/Checkout';
import Header from './components/Header';
import NotFound from './components/NotFound';
import * as API from './services/api';
import './App.css';
import SortSelect from './components/SortSelect';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      categories: [],
      queryInput: '',
      category: '',
      cartItems: [],
      quantity: 0,
      sorting: '',
    };
    this.setProducts = this.setProducts.bind(this);
    this.callback = this.callback.bind(this);
    this.callbackCategory = this.callbackCategory.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.increaseQty = this.increaseQty.bind(this);
    this.decreaseQty = this.decreaseQty.bind(this);
    this.loadCart = this.loadCart.bind(this);
    this.sortProducts = this.sortProducts.bind(this);
    this.callbackSort = this.callbackSort.bind(this);
    this.handleLocalStorage = this.handleLocalStorage.bind(this);
    this.emptyCart = this.emptyCart.bind(this);
  }

  componentDidMount() {
    API.getCategories().then((results) => {
      this.setState({ categories: results });
    });
    if (localStorage.cartItems) this.loadCart();
  }

  handleLocalStorage() {
    const { cartItems, quantity } = this.state;
    localStorage.cartItems = JSON.stringify(cartItems);
    localStorage.quantity = JSON.stringify(quantity);
  }

  async setProducts() {
    const { queryInput, category, sorting } = this.state;
    const results = await API.getProductsFromCategoryAndQuery(
      category, queryInput,
    );
    this.setState({
      products: results.results,
    });
    if (sorting !== '') {
      this.sortProducts();
    }
  }

  emptyCart() {
    this.setState({ cartItems: [], quantity: 0 });
  }

  loadCart() {
    const cartItems = JSON.parse(localStorage.cartItems);
    const quantity = JSON.parse(localStorage.quantity);
    this.setState({ cartItems, quantity });
  }

  callback(input) {
    this.setState({ queryInput: input }, () => this.setProducts());
  }

  removeItem(itemId) {
    const { cartItems } = this.state;
    let { quantity } = this.state;
    const itemIndex = cartItems.findIndex(({ id }) => id === itemId);
    quantity -= cartItems[itemIndex].qty;
    this.setState({
      cartItems: cartItems.filter(({ id }) => id !== itemId),
      quantity,
    }, this.handleLocalStorage);
  }

  increaseQty(itemId) {
    const { cartItems } = this.state;
    let { quantity } = this.state;
    quantity += 1;
    const itemIndex = cartItems.findIndex(({ id }) => id === itemId);
    const nextQuantity = cartItems[itemIndex].qty;
    if ((nextQuantity + 1) > cartItems[itemIndex].available_quantity) return;
    this.setState({
      cartItems: [
        ...cartItems.slice(0, itemIndex),
        { ...cartItems[itemIndex], qty: cartItems[itemIndex].qty + 1 },
        ...cartItems.slice(itemIndex + 1),
      ],
      quantity,
    }, this.handleLocalStorage);
  }

  decreaseQty(itemId) {
    const { cartItems } = this.state;
    let { quantity } = this.state;
    quantity -= 1;
    const itemIndex = cartItems.findIndex(({ id }) => id === itemId);
    if (cartItems[itemIndex].qty <= 1) return;
    this.setState({
      cartItems: [
        ...cartItems.slice(0, itemIndex),
        { ...cartItems[itemIndex], qty: cartItems[itemIndex].qty - 1 },
        ...cartItems.slice(itemIndex + 1),
      ],
      quantity,
    }, this.handleLocalStorage);
  }

  addToCart(itemObj) {
    const { cartItems } = this.state;
    let { quantity } = this.state;
    quantity += 1;
    const items = [...cartItems];
    const currItem = Object.values(cartItems).find((item) => item.id === itemObj.id);
    if (!currItem) items.push(itemObj);
    else currItem.qty += 1;
    this.setState({
      cartItems: items,
      quantity,
    }, this.handleLocalStorage);
  }

  callbackCategory({ target }) {
    this.setState({ category: target.value }, () => this.setProducts());
  }

  sortProducts() {
    const { products, sorting } = this.state;
    if (sorting === 'higher') {
      products.sort((a, b) => b.price - a.price);
    }
    if (sorting === 'lower') {
      products.sort((a, b) => a.price - b.price);
    }
    if (sorting === '') {
      this.setProducts();
    }
    this.setState({});
  }

  callbackSort(method) {
    this.setState({ sorting: method }, () => this.sortProducts());
  }

  render() {
    const { categories, products, cartItems, quantity, sorting } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <div className="body">
            <Switch>
              <Route
                exact
                path="/productdetails/:id"
                render={ (props) => (
                  <ProductDetails
                    { ...props }
                    quantity={ quantity }
                    callback={ this.addToCart }
                  />
                ) }
              />
              <Route
                exact
                path="/cart"
                render={ () => (
                  <ShoppingCart
                    cartItems={ cartItems }
                    handlers={ {
                      remove: this.removeItem,
                      increase: this.increaseQty,
                      decrease: this.decreaseQty,
                    } }
                  />
                ) }
              />
              <Route
                exact
                path="/checkout"
                render={ () => (
                  <Checkout
                    handlers={ {
                      remove: this.removeItem,
                      increase: this.increaseQty,
                      decrease: this.decreaseQty,
                      emptyCart: this.emptyCart,
                    } }
                    cartItems={ cartItems }
                    showButtons="false"
                  />) }
              />
              <Route exact path="/complete" component={ CompletePurchase } />
              <Route
                exact
                path="/"
                render={ () => (
                  <div className="home">
                    <Header slider="true" title="Mercadão Se Vira nos 30" />
                    <CartSlider
                      cartItems={ cartItems }
                      handlers={ {
                        remove: this.removeItem,
                        increase: this.increaseQty,
                        decrease: this.decreaseQty,
                      } }
                    />
                    <SearchBar quantity={ quantity } callback={ this.callback } />
                    <SortSelect callback={ this.callbackSort } sorting={ sorting } />
                    <CategoriesBar
                      categories={ categories }
                      callback={ this.callbackCategory }
                    />
                    <ProductsList
                      products={ products }
                      callback={ this.addToCart }
                      cart={ cartItems }
                    />
                  </div>
                ) }
              />
              <Route component={ NotFound } />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
