import React, { Component } from 'react';
import SearchBarProducts from '../components/Home/SearchBarProducts';
import AllProducts from '../components/Home/AllProducts';
import CategoryList from '../components/Categories/CategoryList';
import * as Api from '../services/api';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      query: '',
      category: '',
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
    const products = await Api.getProductsFromCategoryAndQuery(category, query)
      .then((prod) => prod.results);
    this.setState({
      searchProducts: products,
    });
  }

  addToCart(stateProduct) {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    stateProduct.quantity = 1;
    if (!products.some((product) => product.id === stateProduct.id)) {
      products.push(stateProduct);
    } else {
      const currentIndex = products.map((product) => product.id).indexOf(stateProduct.id);
      products[currentIndex].quantity += 1;
    }
    localStorage.setItem('products', JSON.stringify(products));
  }

  async fetchProducts() {
    const { category, query } = this.state;
    const result = await Api.getProductsFromCategoryAndQuery(category, query);
    const products = result.results;
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
      <>
        <SearchBarProducts
          handleChange={ this.handleChange }
          handleClick={ this.handleClick }
        />
        <div className="main">
          <CategoryList
            categories={ categories }
            onChangeFilterCategory={ this.handleChange }
          />
          <AllProducts searchProducts={ searchProducts } addToCart={ this.addToCart } />
        </div>
      </>
    );
  }
}

export default Home;
