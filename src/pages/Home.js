import React from 'react';
import CartButton from '../Components/CartButton';
import * as api from '../services/api';
import Products from './Products';

class Home extends React.Component {
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
      <div>
        <header>
          <label htmlFor="searchBar" data-testid="home-initial-message">
            <input name="searchBar" type="text" />
            Digite algum termo de pesquisa ou escolha uma categoria.
          </label>
          <CartButton />
        </header>
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
        <Products productList={ productList } />
      </div>
    );
  }
}

export default Home;
