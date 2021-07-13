import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import CategoryList from '../components/CategoryList';
import ProductList from '../components/ProductList';
import Loading from '../components/Loading';
import '../App.css';

let queryValue = 'QUERY';

class Home extends React.Component {
  constructor() {
    super();

    this.state = ({
      searchBar: '',
      categories: undefined,
      products: undefined,
      productDetails: [],
    });

    this.categories = this.categories.bind(this);
    this.callCategoryList = this.callCategoryList.bind(this);
    this.callProductList = this.callProductList.bind(this);
    this.filterProduct = this.filterProduct.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickCategory = this.handleClickCategory.bind(this);
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
    console.log(category);
    queryValue = category;
    this.setState({
      searchBar: category,
    });
    this.products(category, undefined);
  }

  // async getProductDetails() {
  //   const { productDetails } = this.state;
  //   this.setState({ productDetails });
  // }

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
    console.log(products);
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

  callProductList() {
    const { products, productDetails } = this.state;
    // console.log(products);
    if (products !== undefined) {
      return (
        <ProductList
          products={ products }
          productDetails={ productDetails }
          getProductDetails={ this.getProductDetails }
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
