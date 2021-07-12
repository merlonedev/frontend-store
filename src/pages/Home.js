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
      categories: undefined,
      products: undefined,
    });

    this.categories = this.categories.bind(this);
    this.callCategoryList = this.callCategoryList.bind(this);
    this.callProductList = this.callProductList.bind(this);
  }

  async componentDidMount() {
    this.categories();
    this.products();
  }

  async categories() {
    const categories = await Api.getCategories();
    this.setState({
      categories,
    });
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

  async products() {
    const products = await Api.getProductsFromCategoryAndQuery();
    // console.log(products);
    this.setState({
      products: products.results,
    });
  }

  callProductList() {
    const { products } = this.state;
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
    return (
      <section className="main">
        <input
          type="text"
        />
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <Link data-testid="shopping-cart-button" to="/shopping-cart">Carrinho</Link>
        { categories === undefined ? <Loading /> : this.callCategoryList() }
        { products === undefined ? <Loading /> : this.callProductList() }
      </section>
    );
  }
}

export default Home;
