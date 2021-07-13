import React from 'react';
import { Link } from 'react-router-dom';
import * as Api from '../services/api';
import CategoryList from '../components/CategoryList';
import ProductList from '../components/ProductList';
import Loading from '../components/Loading';
import '../App.css';

class Home extends React.Component {
  constructor() {
    super();

    this.state = ({
      searchBar: '',
      categories: undefined,
      products: undefined,
    });

    this.categories = this.categories.bind(this);
    this.callCategoryList = this.callCategoryList.bind(this);
    this.callProductList = this.callProductList.bind(this);
    this.filterProduct = this.filterProduct.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    this.categories();
    this.products();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { searchBar } = this.state;
    if (searchBar !== '') {
      this.products(undefined, searchBar);
      return;
    }
    this.products();
  }

  callCategoryList() {
    const { categories } = this.state;
    if (categories !== undefined) {
      return (
        <CategoryList
          categories={ categories }
        />
      );
    }
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
    const products = await Api.getProductsFromCategoryAndQuery(categoryId, query);
    // console.log(products);
    this.setState({
      products: products.results,
    });
  }

  async categories() {
    const categories = await Api.getCategories();
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

  callProductList() {
    const { products } = this.state;
    // console.log(products);
    if (products !== undefined) {
      return (
        <ProductList
          products={ products }
        />
      );
    }
  }

  render() {
    const { categories, products } = this.state;
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
        <Link data-testid="shopping-cart-button" to="/shopping-cart">Carrinho</Link>
        <section className="main">
          { categories === undefined ? <Loading /> : this.callCategoryList() }
          { products === undefined ? <Loading /> : this.callProductList() }
        </section>
      </section>
    );
  }
}

export default Home;
