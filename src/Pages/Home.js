import React, { Component } from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Categories from '../Components/Categories';
import SearchList from '../Components/SearchList';
import SearchInput from '../Components/SearchInput';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      products: [],
      value: '',
    };

    this.fetchCategories = this.fetchCategories.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async handleClick() {
    const { value } = this.state;
    const products = await getProductsFromCategoryAndQuery('', value);
    this.setState({
      products: products.results,
    });
  }

  handleChange({ target: { value } }) {
    this.setState({
      value,
    });
  }

  async fetchCategories() {
    const categories = await getCategories();
    this.setState({
      categories,
    });
  }

  render() {
    const { categories, value, products } = this.state;

    return (
      <div>
        <SearchInput
          value={ value }
          handleChange={ this.handleChange }
          handleClick={ this.handleClick }
        />
        <Categories categories={ categories } />
        <SearchList products={ products } />
      </div>
    );
  }
}

export default Home;
