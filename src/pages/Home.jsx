import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import CategoryList from '../components/CategoryList';
import ProductList from '../components/ProductList';
import Loading from '../components/Loading';
import { getCartItemsQuantity } from '../services/localStorage';
import '../App.css';

let queryValue = 'QUERY';

class Home extends React.Component {
  constructor() {
    super();

    this.state = ({
      searchBar: '',
      categories: undefined,
      products: undefined,
      totalQuantityInCart: getCartItemsQuantity(),
    });

    this.categories = this.categories.bind(this);
    this.callCategoryList = this.callCategoryList.bind(this);
    this.callProductList = this.renderProductsList.bind(this);
    this.filterProduct = this.filterProduct.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickCategory = this.handleClickCategory.bind(this);
    this.handleCartQuantity = this.handleCartQuantity.bind(this);
  }

  async componentDidMount() {
    this.categories();
    this.products(undefined, queryValue);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async handleClick() {
    const { searchBar } = this.state;
    if (searchBar !== '') {
      this.products(undefined, searchBar);
      return;
    }
    this.products();
  }

  handleClickCategory({ target }) {
    const category = target.id;
    queryValue = category;
    this.setState({
      searchBar: category,
    });
    this.products(category, undefined);
  }

  handleCartQuantity() {
    this.setState((prevState) => ({
      totalQuantityInCart: prevState.totalQuantityInCart + 1,
    }));
  }

  filterProduct(products) {
    const { searchBar } = this.state;
    const inputText = searchBar.toLowerCase();
    return products
      .filter((product) => (
        product.title.toLowerCase().includes(inputText)
        || product.id.toLowerCase().includes(inputText)
      ));
  }

  async products(categoryId, query) {
    const products = await api.getProductsFromCategoryAndQuery(categoryId, query);
    this.setState({
      products,
    });
  }

  async categories() {
    const categories = await api.getCategories();
    this.setState({
      categories,
    });
  }

  callFilteredProducts() {
    const { products } = this.state;
    return (
      <ProductList
        products={ this.filterProduct(products) }
      />
    );
  }

  callCategoryList() {
    const { categories } = this.state;
    if (categories !== undefined) {
      return (
        <CategoryList
          categories={ categories }
          handleClickCategory={ this.handleClickCategory }
        />
      );
    }
  }

  renderProductsList() {
    const { products } = this.state;
    if (products !== undefined) {
      return (
        <ProductList
          products={ products }
          handleCartQuantity={ this.handleCartQuantity }
        />
      );
    }
  }

  render() {
    const { categories, products, totalQuantityInCart } = this.state;
    const { searchBar } = this.state;
    return (
      <section>
        <form>
          <input
            data-testid="query-input"
            className="searchBar"
            type="text"
            name="searchBar"
            value={ searchBar }
            onChange={ this.handleChange }
          />
          <button
            data-testid="query-button"
            type="button"
            onClick={ this.handleClick }
          >
            Pesquisar
          </button>
        </form>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <Link
          data-testid="shopping-cart-button"
          to="/shopping-cart"
        >
          Carrinho
        </Link>
        <span>{ totalQuantityInCart }</span>
        <section className="main">
          { categories === undefined ? <Loading /> : this.callCategoryList() }
          { products === undefined ? <Loading /> : this.renderProductsList() }
        </section>
      </section>
    );
  }
}

export default Home;
