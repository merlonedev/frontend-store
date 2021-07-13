import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import Search from '../components/Search';
import ProductsList from '../components/ProductList';
import CategoriesBar from '../components/CategoriesSideBar';

export default class ProductPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
      list: [],
      showList: false,
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
    this.noList = this.noList.bind(this);
  }

  handleSearch(e) {
    this.setState({ searchValue: e.target.value });
  }

  handleSearchClick() {
    const { searchValue } = this.state;

    api.getProductsFromCategoryAndQuery('', searchValue).then((list) => {
      this.setState({ list: list.results });
      this.setState({ showList: true });
    });
  }

  handleCategoryClick(event) {
    const category = event.target.parentNode.id;
    api.getProductsFromCategoryAndQuery(category, '').then((list) => {
      this.setState({
        list: list.results,
        showList: true,
      });
    });
  }

  noList() {
    return (
      <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    );
  }

  render() {
    const { list, showList } = this.state;
    return (
      <section>
        <div className="header">
          <Search
            onSearchChange={ this.handleSearch }
            onSearchClick={ this.handleSearchClick }
          />
          <Link to="/shoppingcart">
            <button data-testid="shopping-cart-button" type="button">Carrinho</button>
          </Link>
        </div>
        <section className="main">
          <div className="category">
            <CategoriesBar
              onCategoryClick={ this.handleCategoryClick }
            />
          </div>
          <div>
            { !showList && this.noList() }
            <ProductsList list={ list } />
          </div>
        </section>
      </section>
    );
  }
}
