import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import Products from './Products';

class SearchAndResults extends React.Component {
  constructor() {
    super();
    this.state = {
      productList: [],
      search: '',
    };
    this.getInput = this.getInput.bind(this);
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const { search } = this.state;
    const { category } = this.props;
    const { search: prevSearch } = prevState;
    const { category: prevCategory } = prevProps;
    console.log(prevSearch, prevCategory, search, category);
    if (prevSearch !== search || prevCategory !== category) {
      this.getProducts();
    }
  }

  getInput({ target }) {
    this.setState({
      search: target.value,
    });
  }

  async getProducts() {
    const { category } = this.props;
    const { search } = this.state;
    const response = await api.getProductsFromCategoryAndQuery(category, search);
    this.setState({
      productList: response.results,
    });
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
          Search
        </button>
        <div className="main">
          <Products productList={ productList } />
        </div>
      </div>
    );
  }
}

SearchAndResults.propTypes = {
  category: PropTypes.string.isRequired,
};

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
