import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';
import * as api from '../services/api';
import Products from './Products';
import CartButton from '../Components/CartButton';
import Category from '../Components/Categorias';
import '../styles/home.css';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      productList: [],
      categories: [],
    };
    this.inputList = this.inputList.bind(this);
    this.categorieAndQuery = this.categorieAndQuery.bind(this);
    this.getCategory = this.getCategory.bind(this);
  }

  componentDidMount() {
    this.getCategory();
  }

  async getCategory() {
    const category = await api.getCategories();
    this.setState({ categories: category });
  }

  inputList({ target }) {
    this.setState({
      search: target.value,
    });
  }

  async categorieAndQuery(id = '') {
    const { search } = this.state;

    const { results } = await api.getProductsFromCategoryAndQuery(id, search);
    this.setState({
      productList: results,
    });
  }

  render() {
    const { addToCart, quantity } = this.props;
    const { productList, categories } = this.state;
    return (
      <section>
        <div className="header">
          <header>
            <h2 className="market">Undefined Market</h2>
          </header>
        </div>
        <div className="content">
          <form>
            <p
              data-testid="home-initial-message"
              className="searchInput"
            >
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
            <input
              type="text"
              data-testid="query-input"
              onChange={ this.inputList }
              className="inputSearch"
            />
            <AiOutlineSearch className="searchIcon" />
            <button
              type="button"
              data-testid="query-button"
              onClick={ this.categorieAndQuery }
              className="searchBtn"
            >
              <span>
                Pesquisar
              </span>
            </button>
            <CartButton
              quantity={ quantity }
            />
            <Products
              productList={ productList }
              addToCart={ addToCart }
              quantity={ quantity }
            />
            <Category
              category={ categories }
              categoryAndQuery={ this.categorieAndQuery }
            />
          </form>
        </div>
      </section>
    );
  }
}

Home.propTypes = {
  addToCart: PropTypes.func.isRequired,
  quantity: PropTypes.arrayOf(
    PropTypes.object,
  ),
};

Home.defaultProps = {
  quantity: 0,
};

export default Home;
