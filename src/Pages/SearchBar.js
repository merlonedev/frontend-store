import React, { Component } from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import ProductCard from '../Components/ProductCard';

class SearchBar extends Component {
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
    this.renderH2 = this.renderH2.bind(this);
    this.renderCards = this.renderCards.bind(this);
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

  renderH2() {
    return (
      <h2 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h2>
    );
  }

  renderCards() {
    const { products } = this.state;
    return (
      products.map((product) => (
        <ProductCard key={ product.title } product={ product } />
      ))
    );
  }

  render() {
    const { categories, value, products } = this.state;
    return (
      <div>
        <input
          value={ value }
          onChange={ this.handleChange }
          type="text"
          data-testid="query-input"
        />
        <button
          type="button"
          aria-label="search"
          onClick={ this.handleClick }
          data-testid="query-button"
        />
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <aside>
          <ul>
            { categories.map((categorie) => (
              <li
                data-testid="category"
                key={ categorie.name }
              >
                { categorie.name }
              </li>
            ))}
          </ul>
        </aside>
        { (products === []) ? this.renderH2() : this.renderCards()}
      </div>
    );
  }
}

export default SearchBar;
