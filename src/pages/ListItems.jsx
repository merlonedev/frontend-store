import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CartIcon from '../components/CartIcon';
import ProductCard from '../components/ProductCard';
import CategoriesFilter from '../components/CategoriesFilter';
import Loading from '../components/Loading';
import * as api from '../services/api';
import mufasa from '../images/mufasa.gif';
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
      drop: false,
    };

    this.handleChangeSearch = this.handleChangeSearch.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleCategoriesMenu = this.handleCategoriesMenu.bind(this);
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

  handleCategoriesMenu({ target: { checked } }) {
    this.setState({ drop: checked });
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
      drop,
    } = this.state;

    const { amountCart } = this.props;

    return (
      <div className="home">
        <header className="header-home">
          <span className="header-title">
            <img className="logo-mufasa" src={ mufasa } alt="mufasa-gif" />
            Mufasa Commerce
          </span>
          <form className="header-form">
            <label htmlFor="search-bar">
              <input
                className="header-input"
                id="search-bar"
                type="text"
                data-testid="query-input"
                value={ search }
                name="search"
                onChange={ this.handleChangeSearch }
                placeholder="Procure seu produto..."
              />
              <button
                className="header-btn"
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
        <aside className="aside-home">
          <label
            className={ drop ? 'drop-checked' : 'drop-unchecked' }
            htmlFor="drop-category"
          >
            <input
              onChange={ this.handleCategoriesMenu }
              type="checkbox"
              id="drop-category"
            />
            <span>
              <i className="bi bi-shop" />
              {' Categorias'}
            </span>
          </label>
          <div
            className={ drop ? 'categories-checked' : 'categories-unchecked' }
          >
            <CategoriesFilter
              categories={ categories }
              onChange={ this.handleChangeCategory }
            />
          </div>
        </aside>

        {
          loading
            ? <Loading />
            : (
              <main
                className="main-home"
              >
                {this.renderItems()}

              </main>
            )
        }
        <footer className="footer-home">Grupo Mufasa</footer>
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
