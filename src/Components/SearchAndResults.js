import React from 'react';
import * as api from '../services/api';
import Products from './Products';

class SearchAndResults extends React.Component {
  constructor() {
    super();
    this.state = {
      categoryId: '',
      productList: [],
      search: '',
    };
    this.getInput = this.getInput.bind(this);
    this.getProducts = this.getProducts.bind(this);
  }

  getInput({ target }) {
    this.setState({
      search: target.value,
    });
  }

  getProducts() {
    const { categoryId, search } = this.state;
    api.getProductsFromCategoryAndQuery(categoryId, search).then(({ results }) => (
      this.setState({
        productList: results,
      })
    ));
  }

  render() {
    const { productList } = this.state;

    return (
      <div>

        <input
          type="text"
          data-testid="query-input"
          onChange={ this.getInput }
        />
        <p
          data-testid="home-initial-message"
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.getProducts }
        >
          Button
        </button>
        <Products productList={ productList } />
      </div>
    );
  }
}

export default SearchAndResults;
