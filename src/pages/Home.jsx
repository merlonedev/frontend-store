import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonCart from '../Components/ButtonCart';
import Categories from '../Components/Categories';
import ProductList from '../Components/ProductList';
import Input from '../Components/Input';
import * as productsAPI from '../services/api';
import './Home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      products: [],
      id: '',
      categories: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.setProductsCategory = this.setProductsCategory.bind(this);
    // this.storeItems = this.storeItems.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    this.fetchProduct();
  }

  // Requisito 6 - Ajuda monitor Daniel
  async setProductsCategory(id) {
    this.setState({
      id,
    }, () => this.fetchProduct());
  }

  fetchCategories = async () => {
    const { getCategories } = productsAPI;
    const requestReturn = await getCategories();
    this.setState({
      categories: [...requestReturn],
    });
  }

  // requisito 8
  // storeItems(product) {
  //   if (localStorage.getItem('ItemCart') !== null) {
  //     let actualStorage = JSON.parse(localStorage.getItem('ItemCart'));
  //     actualStorage = [...actualStorage, product];
  //     localStorage.setItem('ItemCart', JSON.stringify(actualStorage));
  //   } else {
  //     localStorage.setItem('ItemCart', JSON.stringify([product]));
  //   }
  // }

  async fetchProduct() {
    const { id, searchText } = this.state;
    const { results: products } = await productsAPI
      .getProductsFromCategoryAndQuery(id, searchText);
    this.setState({
      products,
    });
  }

  render() {
    const { searchText, products, categories } = this.state;
    const { storeItems } = this.props;
    return (
      <div>
        <header>
          <ButtonCart />
        </header>
        <section className="home-search">
          <h5 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h5>
          <Input
            value={ searchText }
            name="searchText"
            type="text"
            id="query-input"
            datatestid="query-input"
            onChange={ this.handleChange }
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={ this.handleClick }
          >
            Buscar
          </button>
        </section>
        <Categories
          categories={ categories }
          setProductsCategory={ this.setProductsCategory }
        />
        <ProductList
          { ...{ products } }
          storeItems={ storeItems }
        />
      </div>
    );
  }
}

Home.propTypes = {
  storeItems: PropTypes.func.isRequired,
};

export default Home;
