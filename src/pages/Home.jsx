import React, { Component } from 'react';
import ProductList from '../components/ProductList';
import AllProducts from '../components/AllProducts';
import CategoryList from '../components/CategoryList';
import * as Api from '../services/api';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      category: '',
      query: '',
      searchProducts: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  handleChange({ target }) {
    const { value, name } = target;
    if (name === 'category') {
      this.setState({
        [name]: value,
      }, () => this.fetchProducts());
    } else {
      this.setState({
        [name]: value,
      });
    }
  }

  async handleClick() {
    const { query, category } = this.state;
    console.log(query, category);
    const products = await Api.getProductsFromCategoryAndQuery(category, query)
      .then((prod) => prod.results);
    this.setState({
      searchProducts: products,
    });
  }

  async fetchProducts() {
    const { category, query } = this.state;
    const products = await Api.getProductsFromCategoryAndQuery(category, query)
      .then((prod) => prod.results);
    this.setState({
      searchProducts: products,
    });
  }

  async fetchCategories() {
    const request = await Api.getCategories();
    this.setState({
      categories: request,
    });
  }

  render() {
    const { categories, searchProducts } = this.state;
    return (
      <div>
        <ProductList
          handleChange={ this.handleChange }
          handleClick={ this.handleClick }
        />
        <CategoryList
          categories={ categories }
          onChangeFilterCategory={ this.handleChange }
        />
        <AllProducts searchProducts={ searchProducts } />
      </div>
    );
  }
}

export default Home;
