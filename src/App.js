import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import ShoppingCart from './components/ShoppingCart';
import CategoriesBar from './components/CategoriesBar';
import ProductsList from './components/ProductsList';
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
    };
    this.setProducts = this.setProducts.bind(this);
    this.callback = this.callback.bind(this);
  }

  componentDidMount() {
    API.getCategories()
      .then((results) => {
        this.setState({
          categories: results,
        });
      });
  }

  componentDidUpdate() {
    this.setProducts();
  }

  async setProducts() {
    const { queryInput, category } = this.state;
    console.log(this.state);
    const results = await API.getProductsFromCategoryAndQuery(category, queryInput);
    this.setState({
      products: results.results,
    });
  }

  callback(input) {
    this.setState({ queryInput: input });
  }

  render() {
    const { categories, products } = this.state;
    return (
      <BrowserRouter>
        <SearchBar callback={ this.callback } />
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
        <Route exact path="/" />
        <Route exact path="/cart" component={ ShoppingCart } />
        <CategoriesBar categories={ categories } />
        <ProductsList products={ products } />
      </BrowserRouter>
    );
  }
}
