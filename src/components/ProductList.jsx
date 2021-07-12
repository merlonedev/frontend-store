import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import CategoryList from './CategoryList';
import * as Api from '../services/api';

class ProductList extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      products: [],
      searchValue: '',
      category: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  handleChange({ target }) {
    const { value, name } = target;
    if (name === 'category') {
      this.setState({
        [name]: value,
      }, () => {
        this.fetchProducts();
        console.log(this.state.category);
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  }

  async fetchCategories() {
    const request = await Api.getCategories();
    this.setState({
      categories: request,
    });
  }

  async fetchProducts() {
    const { category, searchValue } = this.state;
    const result = await Api.getProductsFromCategoryAndQuery(category, searchValue);
    const products = result.results;
    this.setState({
      products,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <Link to="/productlist">ProductList</Link>
        <input type="text" />
        <h2
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        {categories
          .map((category, index) => (
            <CategoryList
              key={ index }
              category={ category }
              changeFunction={ this.handleChange }
            />))}
      </div>
    );
  }
}

export default ProductList;
