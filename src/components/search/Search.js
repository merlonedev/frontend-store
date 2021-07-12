import React from 'react';
import * as api from '../../services/api';
import ProductsDisplay from '../../pages/productsDisplay/ProductsDisplay';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      categoryId: '',
      productList: [],
    };
    this.inputList = this.inputList.bind(this);
    this.requestProducts = this.requestProducts.bind(this);
  }

  inputList({ target }) {
    this.setState({
      search: target.value,
    });
  }

  requestProducts() {
    const { categoryId, search } = this.state;
    api.getProductsFromCategoryAndQuery(categoryId, search)
      .then(({ results }) => (
        this.setState({
          productList: results,
        })
      ));
  }

  render() {
    const { productList } = this.state;
    return (
      <form>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <input
          type="text"
          data-testid="query-input"
          onChange={ this.inputList }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.requestProducts }
        >
          Clique Aqui
        </button>
        <ProductsDisplay productList={ productList } />
      </form>
    );
  }
}

export default Search;
