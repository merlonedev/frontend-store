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

  handleChange({ target: { value } }) {
    this.setState({
      value,
    });
  }

  async handleClick(category) {
    const { value } = this.state;
    const categoryFetch = category ? category.id : '';
    const products = await getProductsFromCategoryAndQuery(categoryFetch, value);
    this.setState({
      products: products.results,
    });
  }

  categorieSelect = ({ target }) => {
    const category = { id: target.value, name: target.name };
    this.handleClick(category);
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
        <div className="categories-and-searchlist-container">
          <Categories
            categorieSelect={ this.categorieSelect }
            categories={ categories }
          />
          <SearchList products={ products } />
        </div>
      </div>
    );
  }
}

export default Home;
