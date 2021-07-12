import React, { Component } from 'react';
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

  render() {
    const { list, showList } = this.state;
    if (showList) {
      return (
        <>
          <Search
            onSearchChange={ this.handleSearch }
            onSearchClick={ this.handleSearchClick }
          />
          <ProductsList list={ list } />
        </>
      );
    }
    return (
      <section>
        <Search
          onSearchChange={ this.handleSearch }
          onSearchClick={ this.handleSearchClick }
        />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CategoriesBar />
      </section>
    );
  }
}
