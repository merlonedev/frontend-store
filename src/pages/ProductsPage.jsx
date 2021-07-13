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
      category: '',
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.noList = this.noList.bind(this);
    this.categoryRender = this.categoryRender.bind(this);
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

  noList() {
    return (
      <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    );
  }

  categoryRender() {
    const { category } = this.state;
    const { match } = this.props;
    const { cat } = match.params;
    console.log('1');
    if (category !== cat) {
      console.log(cat);
      if (cat) {
        api.getProductsFromCategoryAndQuery(cat, '').then((list) => {
          this.setState({
            list: list.results,
            showList: true,
            category: cat,
          });
          console.log(list);
        });
      }
    }
  }

  render() {
    const { list, showList } = this.state;
    this.categoryRender();
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
            <CategoriesBar />
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
