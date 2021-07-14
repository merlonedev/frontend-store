import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import * as api from '../services/api';
import Categories from '../components/Categories';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      status: true,
      text: '',
      data: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.apiRequest = this.apiRequest.bind(this);
  }

  componentDidMount() {}

  handleChange({ target }) {
    const { text } = this.state;
    const { value } = target;
    this.setState({ text: value });
  }

  async apiRequest(id, query) {
    const { categories, data } = this.state;
    const allCategories = await api.getCategories();
    const searchProduct = await api.getProductsFromCategoryAndQuery(id, query);
    this.setState({
      data: searchProduct.results,
      categories: allCategories,
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <SearchBar />
        { data.map((categories) => (<Categories
          key={ categories.id }
          category={ categories }
        />))}
      </div>
    );
  }
}

export default Home;
