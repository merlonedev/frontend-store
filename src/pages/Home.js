import React, { Component } from 'react';
import Card from '../components/Card';
import Category from '../components/Category';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

class Home extends Component {
  constructor() {
    super();

    this.getCategories = this.getCategories.bind(this);
    this.categoryHandleChange = this.categoryHandleChange.bind(this);
    this.renderSideBar = this.renderSideBar.bind(this);
    this.searchHandleChange = this.searchHandleChange.bind(this);
    this.searchHandleClick = this.searchHandleClick.bind(this);

    this.state = {
      categories: [],
      selectedCategory: '',
      products: [],
      search: '',
      searchSend: '',
    };
  }

  componentDidMount() {
    this.getCategories();
    this.getProduct('', '');
  }

  componentDidUpdate(prevProps, prevStates) {
    const { selectedCategory, searchSend } = this.state;
    if ((prevStates.selectedCategory !== selectedCategory)
       || (prevStates.searchSend !== searchSend)) {
      this.getProduct(selectedCategory, searchSend);
    }
  }

  async getCategories() {
    const categoriesRequest = await api.getCategories();
    this.setState({
      categories: categoriesRequest,
    });
  }

  async getProduct(category, query) {
    const productsRequest = await api.getProductsFromCategoryAndQuery(category, query);
    this.setState({
      products: productsRequest.results,
    });
  }

  categoryHandleChange({ target }) {
    this.setState({
      selectedCategory: target.value,
    });
  }

  searchHandleChange({ target }) {
    this.setState({
      search: target.value,
    });
  }

  searchHandleClick() {
    const { search } = this.state;
    this.setState({
      searchSend: search,
    });
  }

  renderSideBar() {
    const { categories, selectedCategory } = this.state;

    return (
      <div className="category-sidebar">
        <h2 className="sidebar-title">Categorias:</h2>
        <ul className="category-list">
          { categories.map((category) => (
            <Category
              key={ category.id }
              category={ category }
              checked={ selectedCategory }
              onChange={ this.categoryHandleChange }
            />
          ))}
        </ul>
      </div>
    );
  }

  render() {
    const { products } = this.state;

    return (
      <div className="home-container">
        { this.renderSideBar() }
        <div className="search-form">
          <label htmlFor="search-input">
            <input
              type="text"
              id="search-input"
              onChange={ this.searchHandleChange }
              data-testid="query-input"
            />
          </label>
          <button
            onClick={ this.searchHandleClick }
            type="button"
            data-testid="query-button"
          >
            Search
          </button>
          <h1 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h1>
          <Link
            className="material-icons carrinho"
            to="/carrinho"
            data-testid="shopping-cart-button"
          >
            shopping_cart
          </Link>
          <div className="cards-container">
            { products.map((product, index) => (
              <Card key={ index } product={ product } />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
