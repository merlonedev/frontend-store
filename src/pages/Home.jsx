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
    const { categories } = this.state;
    const allCategories = await api.getCategories();
    this.setState({
      [categories]: allCategories.results,
    });
  }

  render() {
    const { data, categories } = this.state;
    return (
      <div>
        <SearchBar />
        <div>
          { categories.map((category) => (<Categories
            key={ category.id }
            category={ category }
          />))}
        </div>
        {/* <div>
          { data.map((product) => (<Categories
            key={ product.id }
            category={ product }
          />))}

        </div> */}
      </div>
    );
  }
}

export default Home;
