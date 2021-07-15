import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import Products from './Products';
import CartButton from '../Components/CartButton';
import Category from '../Components/Category';
import SearchInput from '../Components/SearchInput';
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
        <header>
          <div className="header-content">
            <h2 className="market">Undefined Shop</h2>
            <div className="search-input-component">
              <SearchInput
                inputList={ this.inputList }
                categorieAndQuery={ this.categorieAndQuery }
              />
            </div>
            <div className="cart-button">
              <CartButton
                quantity={ quantity }
              />
            </div>
          </div>
        </header>
        <Products
          productList={ productList }
          addToCart={ addToCart }
          quantity={ quantity }
        />
        <Category
          category={ categories }
          categoryAndQuery={ this.categorieAndQuery }
        />
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
