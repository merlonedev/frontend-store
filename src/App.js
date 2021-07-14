import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import ShoppingCart from './components/ShoppingCart';
import CategoriesBar from './components/CategoriesBar';
import ProductsList from './components/ProductsList';
import ProductDetails from './components/ProductDetails';
import Checkout from './components/Checkout';
import * as API from './services/api';
import './App.css';

// prettier-ignore
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      categories: [],
      queryInput: '',
      category: '',
      cartItems: [],
    };
    this.setProducts = this.setProducts.bind(this);
    this.callback = this.callback.bind(this);
    this.callbackCategory = this.callbackCategory.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.increaseQty = this.increaseQty.bind(this);
    this.decreaseQty = this.decreaseQty.bind(this);
  }

  componentDidMount() {
    API.getCategories().then((results) => {
      this.setState({
        categories: results,
      });
    });
  }

  // prettier-ignore
  async setProducts() {
    const { queryInput, category } = this.state;
    const results = await API.getProductsFromCategoryAndQuery(
      category,
      queryInput,
    );
    this.setState({
      products: results.results,
    });
  }

  callback(input) {
    this.setState({ queryInput: input }, () => this.setProducts());
  }

  removeItem(itemId) {
    const { cartItems } = this.state;
    this.setState({ cartItems: cartItems.filter(({ id }) => id !== itemId) });
  }

  increaseQty(itemId) {
    const { cartItems } = this.state;
    const itemIndex = cartItems.findIndex(({ id }) => id === itemId);
    this.setState({
      cartItems: [
        ...cartItems.slice(0, itemIndex),
        { ...cartItems[itemIndex], qty: cartItems[itemIndex].qty + 1 },
        ...cartItems.slice(itemIndex + 1),
      ],
    });
  }

  decreaseQty(itemId) {
    const { cartItems } = this.state;
    const itemIndex = cartItems.findIndex(({ id }) => id === itemId);
    if (cartItems[itemIndex].qty < 1) return;
    this.setState({
      cartItems: [
        ...cartItems.slice(0, itemIndex),
        { ...cartItems[itemIndex], qty: cartItems[itemIndex].qty - 1 },
        ...cartItems.slice(itemIndex + 1),
      ],
    });
  }

  addToCart(itemObj) {
    const { cartItems } = this.state;
    const items = [...cartItems];
    items.push(itemObj);
    this.setState({
      cartItems: items,
    });
  }

  callbackCategory({ target }) {
    this.setState({ category: target.value }, () => this.setProducts());
  }

  render() {
    const { categories, products, cartItems } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/productdetails/:id"
            render={ (props) => (
              <ProductDetails { ...props } callback={ this.addToCart } />
            ) }
          />
          <Route
            exact
            path="/cart"
            render={ () => (
              <ShoppingCart
                cartItems={ cartItems }
                updateAppCart={ this.updateCartItems }
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
            path="/"
            render={ () => (
              <div>
                <SearchBar callback={ this.callback } />
                <Link to="/cart" data-testid="shopping-cart-button">
                  Carrinho
                </Link>
                <CategoriesBar
                  categories={ categories }
                  callback={ this.callbackCategory }
                />
                <ProductsList products={ products } callback={ this.addToCart } />
              </div>
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
                } }
                cartItems={ cartItems }
                showButtons="false"
              />) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
