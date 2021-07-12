import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import ShoppingCart from './components/ShoppingCart';
import CategoriesBar from './components/CategoriesBar';
import * as API from './services/api';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      // products: [],
      categories: [],
      // queryInput: '',
      // category: '',
    };
  }

  componentDidMount() {
    API.getCategories()
      .then((results) => {
        this.setState({
          categories: results,
        });
      });
  }

  render() {
    const { categories } = this.state;
    return (
      <BrowserRouter>
        <SearchBar />
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
        <Route exact path="/" />
        <Route exact path="/cart" component={ ShoppingCart } />
        <CategoriesBar categories={ categories } />
      </BrowserRouter>
    );
  }
}
