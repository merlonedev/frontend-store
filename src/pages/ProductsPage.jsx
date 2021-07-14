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
      qtd: 0,
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
    this.handleProductClick = this.handleProductClick.bind(this);
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

  handleCategoryClick(categoryID) {
    api.getProductsFromCategoryAndQuery(categoryID, '').then((list) => {
      this.setState({
        list: list.results,
        showList: true,
      });
    });
  }

  handleProductClick(product) {
    const { title } = product;
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart && cart[title]) cart = { ...cart, [title]: (cart[title] + 1) };
    else cart = { ...cart, [title]: 1 };
    localStorage.setItem('cart', JSON.stringify(cart));
    this.setState({
      qtd: (cart ? Object.values(cart).reduce((acc, curr) => acc + curr, 0) : 0),
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
    const { list, showList, qtd } = this.state;
    return (
      <section>
        <div className="header">
          <Search
            onSearchChange={ this.handleSearch }
            onSearchClick={ this.handleSearchClick }
          />
          <div className="search-bar-shoppingCart">
            <Link to="/shoppingcart">
              <button
                data-testid="shopping-cart-button"
                type="button"
              >
                Carrinho
              </button>
            </Link>
            <p data-testid="shopping-cart-size">
              { qtd }
            </p>
          </div>
        </div>
        <section className="main">
          <div className="category">
            <CategoriesBar
              onCategoryClick={ this.handleCategoryClick }
            />
          </div>
          <div>
            { !showList && this.noList() }
            <ProductsList list={ list } onProductClick={ this.handleProductClick } />
          </div>
        </section>
      </section>
    );
  }
}
