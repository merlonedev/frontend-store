import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import ProductCard from '../components/ProductCard';
import CategoriesFilter from '../components/CategoriesFilter';
import * as api from '../services/api';

class ListItens extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      products: [],
      checkList: true,
      categories: [],
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.filterProducts = this.filterProducts.bind(this);
    this.fetchCategories = this.fetchCategories.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  handleSearch(event) {
    const { name } = event.target;
    const value = event.target.type === 'checkbox'
      ? event.target.checked
      : event.target.value;
    this.setState({
      [name]: value,
    });
  }

  async fetchCategories() {
    const response = await api.getCategories();
    this.setState({
      categories: [...response],
    });
  }

  async filterProducts(event) {
    event.preventDefault();
    try {
      const { search } = this.state;
      const { results } = await api.getProductsFromCategoryAndQuery(1, search);
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

  render() {
    const { search, products, checkList, categories } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="search-bar">
            <input
              id="search-bar"
              type="text"
              data-testid="query-input"
              value={ search }
              name="search"
              onChange={ this.handleSearch }
            />
            <button
              type="submit"
              data-testid="query-button"
              onClick={ this.filterProducts }
            >
              Pesquisar
            </button>
          </label>
        </form>
        <Link to="/cart" data-testid="shopping-cart-button">
          <FiShoppingCart />
        </Link>
        <div data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </div>
        <CategoriesFilter categories={ categories } />
        <div>
          {
            checkList
              ? products
                .map((product) => (
                  <ProductCard key={ product.id } product={ product } />
                ))
              : <span>Nenhum produto foi encontrado</span>
          }
        </div>
      </div>
    );
  }
}

export default ListItens;
