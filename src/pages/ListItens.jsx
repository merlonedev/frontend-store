import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import ProductCard from '../components/ProductCard';
import CategoriesFilter from '../components/CategoriesFilter';
import * as api from '../services/api';
import './ListItens.css';

class ListItens extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      products: [],
      checkList: true,
      categories: [],
      categoryId: '',
    };

    this.handleChangeSearch = this.handleChangeSearch.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.filterProductsForCategory = this.filterProductsForCategory.bind(this);
    this.searchProducts = this.searchProducts.bind(this);
    this.fetchCategories = this.fetchCategories.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  handleChangeSearch(event) {
    const { name } = event.target;
    const value = event.target.type === 'checkbox'
      ? event.target.checked
      : event.target.value;
    this.setState({
      [name]: value,
    });
  }

  handleChangeCategory(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    }, () => this.filterProductsForCategory());
  }

  handleClick(event) {
    event.preventDefault();
    this.searchProducts();
  }

  async filterProductsForCategory() {
    try {
      const { categoryId } = this.state;
      const { results } = await api.getProductsFromCategoryAndQuery(categoryId, '');
      this.setState({
        products: [...results],
      });
    } catch (err) {
      console.log(err);
    }
  }

  async searchProducts() {
    try {
      const { search, categoryId } = this.state;
      const { results } = await api.getProductsFromCategoryAndQuery(categoryId, search);
      if (results.length) {
        return this.setState({
          products: [...results],
          checkList: true,
        });
      }
      this.setState({
        checkList: false,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async fetchCategories() {
    try {
      const response = await api.getCategories();
      this.setState({
        categories: [...response],
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const {
      search,
      products,
      checkList,
      categories,
      categoryId,
    } = this.state;
    return (
      <div>
        <nav className="navbar">
          <span className="nav-title">Mufasa Commerce</span>
          <form className="nav-form">
            <label htmlFor="search-bar">
              <input
                id="search-bar"
                type="text"
                data-testid="query-input"
                value={ search }
                name="search"
                onChange={ this.handleChangeSearch }
                placeholder="Procure seu produto..."
              />
              <button
                type="submit"
                data-testid="query-button"
                onClick={ this.handleClick }
              >
                Pesquisar
              </button>
            </label>
          </form>
          <Link to="/cart" data-testid="shopping-cart-button">
            <FiShoppingCart />
          </Link>
        </nav>
        <div data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </div>
        <CategoriesFilter
          categories={ categories }
          onChange={ this.handleChangeCategory }
        />
        <div>
          {
            checkList
              ? products
                .map((product) => (
                  <ProductCard
                    key={ product.id }
                    product={ product }
                    category={ categoryId }
                  />
                ))
              : <span>Nenhum produto foi encontrado</span>
          }
        </div>
      </div>
    );
  }
}

export default ListItens;
