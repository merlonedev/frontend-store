import React from 'react';
import SearchInput from '../components/SearchInput';
import ProductList from '../components/ProductList';
import Category from '../components/Category';
import * as api from '../services/api';

class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
      categories: [],
      query: '',
      categoryId: '',
    };

    this.fetchProducts = this.fetchProducts.bind(this);
    this.fetchCategories = this.fetchCategories.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleLiClick = this.handleLiClick.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { categoryId, query } = this.state;
    this.setState({
      products: [],
    },
    () => this.fetchProducts(categoryId, query));
  }

  handleLiClick(id) {
    this.setState({
      categoryId: id,
    }, this.fetchProducts);
  }

  async fetchCategories() {
    const { getCategories } = api;
    const response = await getCategories();
    this.setState({
      categories: response,
    });
  }

  async fetchProducts() {
    const { categoryId, query } = this.state;
    const { getProductsFromCategoryAndQuery } = api;
    const response = await getProductsFromCategoryAndQuery(categoryId, query);
    this.setState({
      products: response.results,
    });
  }

  render() {
    const { products, query, categories } = this.state;

    return (
      <div data-testid="home-initial-message">
        <SearchInput
          name="query"
          value={ query }
          onChange={ this.handleChange }
          onClick={ this.handleClick }
        />
        <aside>
          <Category categories={ categories } handleLiClick={ this.handleLiClick } />
        </aside>
        <ProductList products={ products } />
        {
          products.length === 0 && <p>Nenhum produto foi encontrado</p>
        }
      </div>
    );
  }
}

export default HomePage;
