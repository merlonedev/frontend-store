import React, { Component } from 'react';
import { Category, SearchBar, ProductCard } from '../components';
import * as api from '../services/api';

class Home extends Component {
  constructor() {
    super();

    this.getCategories = this.getCategories.bind(this);
    this.getProducts = this.getProducts.bind(this);
    this.renderSideBar = this.renderSideBar.bind(this);
    this.renderSearchContent = this.renderSearchContent.bind(this);
    this.renderSearchForm = this.renderSearchForm.bind(this);
    this.categoryHandleChange = this.categoryHandleChange.bind(this);
    this.searchHandleChange = this.searchHandleChange.bind(this);
    this.searchHandleClick = this.searchHandleClick.bind(this);

    this.state = {
      categories: [],
      search: '',
      searchSend: '',
      selectedCategory: '',
      products: [],
    };
  }

  componentDidMount() {
    this.getCategories();
    this.getProducts('', '');
  }

  componentDidUpdate(prevProps, prevStates) {
    const { selectedCategory, searchSend } = this.state;
    if ((prevStates.selectedCategory !== selectedCategory)
       || (prevStates.searchSend !== searchSend)) {
      this.getProducts(selectedCategory, searchSend);
    }
  }

  async getCategories() {
    const categoriesRequest = await api.getCategories();
    this.setState({
      categories: categoriesRequest,
    });
  }

  async getProducts(category, query) {
    const productsRequest = await api.getProductsFromCategoryAndQuery(category, query);
    if (productsRequest === undefined) {
      this.setState({
        products: [],
      });
    } else {
      this.setState({
        products: productsRequest.results,
      });
    }
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

  renderProductCards() {

  }

  renderSearchContent() {
    const { products, searchSend } = this.state;

    if (products.length === 0 && searchSend.length === 0) {
      return (
        <h1 className="search-title" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
      );
    }

    if (products.length === 0 && searchSend.length > 0) {
      return (
        <h1 className="search-title" id="not-found-message">
          Nenhum produto foi encontrado
        </h1>
      );
    }

    return (
      <div className="products-list">
        { products.map((product) => (
          <ProductCard
            key={ product.id }
            product={ product }
          />
        ))}
      </div>
    );
  }

  renderSearchForm() {
    return (
      <div className="search-form">
        <SearchBar
          onChange={ this.searchHandleChange }
          onClick={ this.searchHandleClick }
        />
        { this.renderSearchContent() }
      </div>
    );
  }

  render() {
    return (
      <div className="home-container">
        { this.renderSideBar() }
        { this.renderSearchForm() }
      </div>
    );
  }
}

export default Home;
