import React, { Component } from 'react';
import ProductList from './ProductList';
import SearchMsg from './SearchMsg';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Loading from './Loading';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      products: [],
      value: '',
    };

    this.hendleChange = this.hendleChange.bind(this);
    this.hendleClick = this.hendleClick.bind(this);
  }

  hendleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  async hendleClick() {
    const { value, loading } = this.setState;

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
    // if (loading) return <Loading />;
    return (
      <section>
        <input
          type="search"
          onChange={ this.hendleChange }
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
        <SearchMsg />
        <ProductList products={ products } />
      </section>
    );
  }
}

export default SearchBar;
