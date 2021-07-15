import React, { Component } from 'react';
import { Category, SearchBar, ProductCard } from '../components';
import * as api from '../services/api';

class Home extends Component {
  constructor() {
    super();

    this.getCategories = this.getCategories.bind(this);
    this.getProducts = this.getProducts.bind(this);
    this.renderSideBar = this.renderSideBar.bind(this);
    this.renderSearchContent = this.renderSearchContent.bind(this);
    this.renderSearchForm = this.renderSearchForm.bind(this);
    this.renderProductCards = this.renderProductCards.bind(this);
    this.categoryHandleChange = this.categoryHandleChange.bind(this);
    this.searchHandleChange = this.searchHandleChange.bind(this);
    this.searchHandleClick = this.searchHandleClick.bind(this);
    this.cartHandleCounter = this.cartHandleCounter.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.saveCart = this.saveCart.bind(this);
    this.loadCart = this.loadCart.bind(this);

    this.state = {
      categories: [],
      search: '',
      searchSend: '',
      selectedCategory: '',
      products: [],
      totalCartItems: 0,
      cartItems: [],
    };
  }

  componentDidMount() {
    this.getCategories();
    this.getProducts('', '');
    this.loadCart();
  }

  componentDidUpdate(prevProps, prevState) {
    const { selectedCategory, searchSend, cartItems, totalCartItems } = this.state;
    if ((prevState.selectedCategory !== selectedCategory)
       || (prevState.searchSend !== searchSend)) {
      this.getProducts(selectedCategory, searchSend);
    }
    if ((prevState.cartItems !== cartItems)
      || (prevState.totalCartItems !== totalCartItems)) {
      this.saveCart();
    }
  }

  async getCategories() {
    const categoriesRequest = await api.getCategories();
    this.setState({
      categories: categoriesRequest,
    });
  }

  async getProducts(category, query) {
    const productsRequest = await api.getProductsFromCategoryAndQuery(category, query);
    if (productsRequest === undefined) {
      this.setState({
        products: [],
      });
    } else {
      this.setState({
        products: productsRequest.results,
      });
    }
  }

  categoryHandleChange({ target }) {
    this.setState({
      selectedCategory: target.value,
    });
  }

  searchHandleChange({ target }) {
    this.setState({
      search: target.value,
    });
  }

  searchHandleClick() {
    const { search } = this.state;
    this.setState({
      searchSend: search,
    });
  }

  cartHandleCounter() {
    this.setState((prevState) => ({
      totalCartItems: prevState.totalCartItems + 1,
    }));
  }

  addToCart(product) {
    const { cartItems } = this.state;
    if (cartItems.some((item) => item.id === product.id)) {
      cartItems.find((item) => item.id === product.id).quantity += 1;
      this.setState({ cartItems });
    } else {
      this.setState((prevState) => ({
        cartItems: [...prevState.cartItems, {
          quantity: 1,
          id: product.id,
          product: [product],
        }],
      }));
    }
    this.cartHandleCounter();
  }

  loadCart() {
    const getCartItems = JSON.parse(sessionStorage.getItem('cartItems'));
    // Acesso Direto, só funcionará se a chave 'cartItems' existir no localStorage/sessionStorage
    // const getCartItems = JSON.parse(localStorage.cartItems);
    if (getCartItems) {
      this.setState({ cartItems: getCartItems });
      const quantity = getCartItems.map((cartItem) => cartItem.quantity)
        .reduce((currentValue, nextValue) => currentValue + nextValue);
      this.setState({
        totalCartItems: quantity,
        cartItems: [...getCartItems],
      });
    }
  }

  saveCart() {
    const { cartItems } = this.state;
    sessionStorage.clear();
    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
    // Acesso Direto, funciona mesmo sem existir a chave 'cartItems', pois na condição de inixistencia ela é criada
    // localStorage.cartItems = JSON.stringify(testCart);
  }

  renderSideBar() {
    const { categories, selectedCategory } = this.state;

    return (
      <div className="category-sidebar">
        <h2 className="sidebar-title">Categorias:</h2>
        <ul className="category-list">
          { categories.map((category) => (
            <Category
              key={ category.id }
              category={ category }
              checked={ selectedCategory }
              onChange={ this.categoryHandleChange }
            />
          ))}
        </ul>
      </div>
    );
  }

  renderProductCards() {
    const { products } = this.state;
    return (
      <div className="products-list">
        { products.map((product) => (
          <ProductCard
            key={ product.id }
            product={ product }
            addToCart={ this.addToCart }
          />
        ))}
      </div>
    );
  }

  renderSearchContent() {
    const { products, searchSend } = this.state;

    if (products.length === 0 && searchSend.length === 0) {
      return (
        <h1 className="search-title" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
      );
    }

    if (products.length === 0 && searchSend.length > 0) {
      return (
        <h1 className="search-title" id="not-found-message">
          Nenhum produto foi encontrado
        </h1>
      );
    }

    return (
      this.renderProductCards()
    );
  }

  renderSearchForm() {
    const { totalCartItems } = this.state;

    return (
      <div className="search-form">
        <SearchBar
          onChange={ this.searchHandleChange }
          onClick={ this.searchHandleClick }
          totalCartItems={ totalCartItems }
        />
        { this.renderSearchContent() }
      </div>
    );
  }

  render() {
    return (
      <div className="home-container">
        { this.renderSideBar() }
        { this.renderSearchForm() }
      </div>
    );
  }
}

export default Home;
