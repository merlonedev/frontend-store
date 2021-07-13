import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import ShoppingCart from './components/ShoppingCart';
import CategoriesBar from './components/CategoriesBar';
import ProductsList from './components/ProductsList';
import ProductDetails from './components/ProductDetails';
import * as API from './services/api';
import './App.css';

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
  }

  componentDidMount() {
    API.getCategories().then((results) => {
      this.setState({
        categories: results,
      });
    });
  }

  async setProducts() {
    const { queryInput, category } = this.state;
    const results = await API.getProductsFromCategoryAndQuery(
      category,
      queryInput
    );
    this.setState({
      products: results.results,
    });
  }

  callback(input) {
    this.setState({ queryInput: input }, () => this.setProducts());
  }

  addToCart(id) {
    const items = [...this.state.cartItems];
    items.push(id);
    this.setState({
      cartItems: items,
    });
  }

  callbackCategory({ target }) {
    this.setState({ category: target.value }, () => this.setProducts());
  }

  // prettier-ignore
  render() {
    const { categories, products, cartItems } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/productdetails/:id" component={ ProductDetails } />
          <Route exact path="/cart" render={ () => (<ShoppingCart cartItems={ cartItems } />)} />
          <Route
            exact
            path="/"
            render={ () => (
              <div>
                <SearchBar callback={ this.callback } />
                <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
                <CategoriesBar
                  categories={ categories }
                  callback={ this.callbackCategory }
                />
                <ProductsList products={ products } callback={ this.addToCart } />
              </div>
            ) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
