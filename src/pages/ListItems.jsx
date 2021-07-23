import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CartIcon from '../components/CartIcon';
import ProductCard from '../components/ProductCard';
import CategoriesFilter from '../components/CategoriesFilter';
import Loading from '../components/Loading';
import * as api from '../services/api';
import '../css/listItens.css';

class ListItems extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      products: [],
      checkList: true,
      categories: [],
      categoryId: '',
      loading: false,
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

  handleChangeSearch({ target: { name, value } }) {
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
      this.setState({
        loading: true,
      });
      const { categoryId } = this.state;
      const { results } = await api.getProductsFromCategoryAndQuery(categoryId, '');
      this.setState({
        products: [...results],
        loading: false,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async searchProducts() {
    try {
      this.setState({
        loading: true,
      });
      const { search, categoryId } = this.state;
      const { results } = await api.getProductsFromCategoryAndQuery(categoryId, search);
      if (results.length) {
        return this.setState({
          products: [...results],
          checkList: true,
          loading: false,
        });
      }
      this.setState({
        loading: false,
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

  renderItems() {
    const { products, checkList, categoryId } = this.state;
    const { addToCartItems } = this.props;
    return checkList
      ? products
        .map((product) => (
          <ProductCard
            key={ product.id }
            product={ product }
            category={ categoryId }
            addToCartItems={ addToCartItems }
          />
        ))
      : <span>Nenhum produto foi encontrado</span>;
  }

  render() {
    const {
      search,
      categories,
      loading,
    } = this.state;

    const { amountCart } = this.props;

    return (
      <div className="home">
        <header className="navbar">
          <span className="nav-title">Mufasa Commerce</span>
          <form className="nav-form">
            <label htmlFor="search-bar">
              <input
                className="nav-input"
                id="search-bar"
                type="text"
                data-testid="query-input"
                value={ search }
                name="search"
                onChange={ this.handleChangeSearch }
                placeholder="Procure seu produto..."
              />
              <button
                className="nav-btn"
                type="submit"
                data-testid="query-button"
                onClick={ this.handleClick }
              >
                Pesquisar
              </button>
            </label>
            <div data-testid="home-initial-message" className="info">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </div>
          </form>
          <Link to="/cart" className="link-cart" data-testid="shopping-cart-button">
            <CartIcon amount={ amountCart } />
          </Link>
        </header>

        <CategoriesFilter
          categories={ categories }
          onChange={ this.handleChangeCategory }
        />

        <main className="product-list">
          {
            loading
              ? <Loading />
              : this.renderItems()
          }
        </main>
        <footer>Grupo Mufasa</footer>
      </div>
    );
  }
}

ListItems.propTypes = {
  addToCartItems: PropTypes.func.isRequired,
  amountCart: PropTypes.number,
};

ListItems.defaultProps = {
  amountCart: 0,
};

export default ListItems;
