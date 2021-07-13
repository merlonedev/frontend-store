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

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.filterProducts = this.filterProducts.bind(this);
    this.fetchCategories = this.fetchCategories.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  handleChange(event) {
    const { name } = event.target;
    const value = event.target.type === 'checkbox'
      ? event.target.checked
      : event.target.value;
    this.setState({
      [name]: value,
    }, () => this.filterProducts());
  }

  handleClick(event) {
    event.preventDefault();
    this.filterProducts();
  }

  async filterProducts() {
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
    const response = await api.getCategories();
    this.setState({
      categories: [...response],
    });
  }

  // addToStorage(product) {
  //   // let products = {...product};
  //   console.log(product.target);
  //   localStorage.setItem(product.id, product);
  // }

  render() {
    const { search, products, checkList, categories } = this.state;
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
                onChange={ this.handleChange }
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
            <Link to="/cart" data-testid="shopping-cart-button">
              <FiShoppingCart />
            </Link>
          </form>
        </nav>
        <div data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </div>
        <CategoriesFilter
          categories={ categories }
          onChange={ this.handleChange }
        />
        <div>
          {
            checkList
              ? products
                .map((product) => (
                  <ProductCard
                    key={ product.id }
                    product={ product }
                    // addToCart={ this.addToStorage }
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
