import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import * as api from '../services/api';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      // status: true,
      text: '',
      data: [],
    };
    const { categories } = this.state;
    this.handleChange = this.handleChange.bind(this);
    this.getProduct = this.getProduct.bind(this);
    this.getCategories = this.getCategories.bind(this);
  }

  componentDidMount() {
    this.getCategories();
    this.getProduct();
  }

  handleChange({ target }) {
    const { text } = this.state;
    const { value } = target;
    this.setState({ [text]: value });
  }

  async getProduct(id, query) {
    const { data } = this.state;
    const searchProduct = await api.getProductsFromCategoryAndQuery(id, query);
    this.setState({
      [data]: searchProduct,
    });
  }

  async getCategories() {
    const allCategories = await api.getCategories();
    this.setState({
      categories: allCategories,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <SearchBar />
        <div>
          {
            categories.map((category) => (<Categories
              key={ category.id }
              category={ category }
            />))
          }
        </div>
      </div>
    );
  }
}

export default Home;
