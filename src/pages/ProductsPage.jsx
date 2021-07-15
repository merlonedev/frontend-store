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
      cartQTD: 0,
      order: 'default',
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
    this.handleProductClick = this.handleProductClick.bind(this);
    this.orderProducts = this.orderProducts.bind(this);
    this.noList = this.noList.bind(this);
  }

  componentDidMount() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    this.getCartQTD(cart);
  }

  handleSearch(e) {
    this.setState({ searchValue: e.target.value });
  }

  handleSearchClick() {
    const { searchValue } = this.state;

    api.getProductsFromCategoryAndQuery('', searchValue).then((response) => {
      this.setState({ list: response.results });
      this.setState({ showList: true });
    });
  }

  handleCategoryClick(categoryID) {
    api.getProductsFromCategoryAndQuery(categoryID, '').then((response) => {
      this.setState({
        list: response.results,
        showList: true,
      });
    }).then(this.orderProducts);
  }

  handleProductClick(product) {
    const { title, price, id, available_quantity: avQtd } = product;
    console.log(avQtd);
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart && cart[id]) {
      cart = { ...cart,
        [id]: [title, cart[id][1] + 1, price, avQtd] };
    } else {
      cart = { ...cart, [id]: [title, 1, price, avQtd] };
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    this.getCartQTD(cart);
  }

  getCartQTD(cart) {
    let cartQTD = 0;
    if (cart) {
      Object.values(cart).forEach((item) => {
        cartQTD += item[1];
      });
    }
    this.setState({
      cartQTD,
    });
  }

    handleOrderChange = ({ target }) => {
      const { value } = target;
      this.setState({ order: value }, () => this.orderProducts());
    }

    noList() {
      return (
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      );
    }

    orderProducts() {
      const { order, list } = this.state;
      if (order === 'higher') {
        return [...list].sort((a, b) => b.price - a.price);
      }
      if (order === 'lower') {
        return [...list].sort((a, b) => a.price - b.price);
      }
      return list;
    }

    render() {
      const { showList, cartQTD } = this.state;
      return (
        <section>
          <div className="header">
            <Search
              onSearchChange={ this.handleSearch }
              onSearchClick={ this.handleSearchClick }
            />
            <div className="search-bar-shoppingCart">
              <select
                name="order"
                id="order-products"
                onChange={ this.handleOrderChange }
              >
                <option value="default">Ordenar por preço</option>
                <option value="higher">Maior preço</option>
                <option value="lower">Menor preço</option>
              </select>
              <Link to="/shoppingcart">
                <button
                  data-testid="shopping-cart-button"
                  type="button"
                >
                  Carrinho
                </button>
              </Link>
              <p data-testid="shopping-cart-size">
                { cartQTD }
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
              <ProductsList
                list={ this.orderProducts() }
                onProductClick={ this.handleProductClick }
              />
            </div>
          </section>
        </section>
      );
    }
}
