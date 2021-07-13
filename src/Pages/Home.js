import React, { Component } from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import NotFound from '../Components/NotFound';
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
      showSearchText: true,
      notFound: false,
    };

    this.fetchCategories = this.fetchCategories.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderH2 = this.renderH2.bind(this);
    this.renderTexts = this.renderTexts.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async handleClick() {
    const { value } = this.state;
    const products = await getProductsFromCategoryAndQuery('', value);
    this.setState({
      products: products.results,
      showSearchText: false,
    });
    console.log(products.length);
    if (products.length === 0) {
      this.setState({
        notFound: true,
      });
    }
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

  renderH2() {
    return (
      <div>
        <h2>
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
      </div>
    );
  }

  renderTexts() {
    const { showSearchText, notFound } = this.state;
    if (showSearchText) this.renderH2();
    if (notFound) {
      return (
        <NotFound />
      );
    } return (
      null
    );
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
        {this.renderTexts()}
        <Categories categories={ categories } />
        <SearchList products={ products } />
      </div>
    );
  }
}

export default Home;
