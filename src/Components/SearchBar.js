import React, { Component } from 'react';
import ProductList from './ProductList';
import SearchMsg from './SearchMsg';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Loading from './Loading';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      products: [],
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  async handleClick() {
    const { value } = this.state;
    this.setState({ loading: true },
      async () => {
        const products = await getProductsFromCategoryAndQuery('', value);
        this.setState({
          loading: false,
          products: products.results,
        });
      });
  }

  render() {
    const { value, products, loading } = this.state;
    if (loading) return <Loading />;

    return (
      <section>
        <input
          type="search"
          onChange={ this.handleChange }
          value={ value }
          data-testid="query-input"
        />
        <button
          type="button"
          onClick={ this.handleClick }
          data-testid="query-button"
        >
          Search
        </button>

        {
          (products.length === 0)
            ? <SearchMsg />
            : <ProductList value={ value } products={ products } />
        }

      </section>
    );
  }
}

export default SearchBar;
