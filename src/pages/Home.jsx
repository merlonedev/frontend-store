import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import ListProd from '../components/ListProd';
import * as api from '../services/api';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      // status: true,
      inputText: '',
      data: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.getProductByIdAndQuery = this.getProductByIdAndQuery.bind(this);
    this.getCategories = this.getCategories.bind(this);
    this.getProductByQuery = this.getProductByQuery.bind(this);
  }

  componentDidMount() {
    this.getCategories();
    this.getProductByIdAndQuery();
  }

  componentDidUpdate(state, prevState) {
    const { inputText } = this.state;
    if (state !== prevState) {
      this.getProductByQuery(inputText);
    }
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  async getProductByQuery(query) {
    const searchProductByQuery = await api.getProductsFromQuery(query);
    this.setState({
      data: searchProductByQuery.results,
    });
  }

  async getProductByIdAndQuery(id, query) {
    const searchProduct = await api.getProductsFromCategoryAndQuery(id, query);
    this.setState({
      data: searchProduct.results,
    });
  }

  async getCategories() {
    const allCategories = await api.getCategories();
    this.setState({
      categories: allCategories,
    });
  }

  render() {
    const { categories, data, inputText } = this.state;
    return (
      <div>
        <SearchBar
          inputText={ inputText }
          onChange={ this.handleChange }
        />
        <div>
          {
            categories.map((category) => (<Categories
              key={ category.id }
              category={ category }
            />))
          }
        </div>
        <div>
          <ListProd products={ data } />
        </div>
      </div>
    );
  }
}

export default Home;
