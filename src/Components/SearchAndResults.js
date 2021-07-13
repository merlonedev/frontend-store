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
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
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

/*
Referencia Git Hub:
Turma 11 - Grupo 35
Ajudou a fazer função da requisição da api.
https://github.com/tryber/sd-011-project-frontend-online-store/tree/requisito-5-grupo-35/src
Turma 10 - Grupo 9:
Ajudou no tratamento de informações da lista de produtos(função map product.js).
https://github.com/tryber/sd-010-a-project-frontend-online-store/tree/grupo9-requisito-5/src
*/
