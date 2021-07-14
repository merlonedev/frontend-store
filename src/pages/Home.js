import React from 'react';
import { Link } from 'react-router-dom';
import List from '../Components/List';
import SearchResult from '../Components/SearchResult';
import * as api from '../services/api';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      input: '',
      products: [],
    };

    this.getSearch = this.getSearch.bind(this);
    this.doSearch = this.doSearch.bind(this);
  }

  getSearch(change) {
    this.setState({
      input: change,
    });
  }

  async doSearch() {
    const { getProductsFromCategoryAndQuery } = api;
    const { input } = this.state;
    try {
      const allProducts = await getProductsFromCategoryAndQuery('', input);
      this.setState({
        products: allProducts.results,
      });
    } catch {
      return <p>Nenhum produto foi encontrado</p>;
    }
  }

  render() {
    const { products } = this.state;

    return (
      <div>
        <List textChange={ this.getSearch } />
        <button
          type="button"
          onClick={ this.doSearch }
          data-testid="query-button"
        >
          Pesquisar
        </button>
        {/* {clickSearch && <SearchResult textToSearch={ search } />} */}
        <SearchResult products={ products } />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link to="/Card" />
      </div>
    );
  }
}

export default Home;
