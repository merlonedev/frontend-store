import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Header from '../components/Header';
import CategoryAside from '../components/CategoryAside';
import ProductList from '../components/ProductList';
import Input from '../components/Input';

import Layout from '../styles/Layout';
import { ProductsContainer } from '../styles/styledComponents';
import { Cart, Search } from '../sources/Icons';

const initialMsg = (
  <p data-testid="home-initial-message">
    Digite algum termo de pesquisa ou escolha uma categoria.
  </p>
);
const notFoundMsg = <p>Nenhum produto foi encontrado</p>;

const initialState = {
  queryText: '',
  products: [],
  didSearch: false,
  categories: [],
  cartSize: 0,
};
class Home extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.categoryAndQuery = this.categoryAndQuery.bind(this);
    this.categoryApi = this.categoryApi.bind(this);
    this.setCartSize = this.setCartSize.bind(this);

    this.state = initialState;
  }

  componentDidMount() {
    this.categoryApi();
    this.setCartSize();
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  setCartSize() {
    if (sessionStorage.getItem('addCart')) {
      const cartProducts = JSON.parse(sessionStorage.getItem('addCart'));
      const size = cartProducts.length;
      this.setState({
        cartSize: size,
      });
    }
  }

  async categoryApi() {
    const categories = await getCategories();
    this.setState({ categories });
  }

  async categoryAndQuery(id = '') {
    const { queryText } = this.state;
    const { results } = await getProductsFromCategoryAndQuery(id, queryText);
    this.setState({
      products: results,
      didSearch: true,
    });
  }

  render() {
    const {
      cartSize,
      queryText,
      products,
      didSearch,
      categories,
    } = this.state;

    const msg = didSearch ? notFoundMsg : initialMsg;

    return (
      <Layout>
        <Header>
          <Input
            id="query-input"
            type="text"
            name="queryText"
            value={ queryText }
            handleChange={ this.handleChange }
          />
          <button
            type="button"
            onClick={ () => { this.categoryAndQuery(''); } }
            data-testid="query-button"
          >
            <Search />
          </button>
          <Link
            to="/shopping-cart"
            data-testid="shopping-cart-button"
          >
            <Cart />
            <p data-testid="shopping-cart-size">{ cartSize }</p>
          </Link>
        </Header>
        <ProductsContainer>
          <CategoryAside
            categoryObj={ categories }
            categoryAndQuery={ this.categoryAndQuery }
          />
          { (products.length > 0)
            ? (
              <ul>
                <ProductList
                  updateCartSize={ this.setCartSize }
                  products={ products }
                />
              </ul>)
            : msg }
        </ProductsContainer>
      </Layout>
    );
  }
}

export default Home;
