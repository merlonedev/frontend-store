import React from 'react';
import List from '../Components/List';
import SearchResult from '../Components/SearchResult';
import Categories from '../Components/Categories';
import * as api from '../services/api';
import ShoppingCartLink from '../Components/ShoppingCartLink';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      input: '',
      products: [],
      categories: [],
    };

    this.getSearch = this.getSearch.bind(this);
    this.doSearch = this.doSearch.bind(this);
    this.handleJonas = this.handleJonas.bind(this);
    this.getFilterId = this.getFilterId.bind(this);
  }

  componentDidMount() {
    this.handleJonas();
  }

  async handleJonas() {
    const category = await api.getCategories();
    this.setState({
      categories: category,
    });
  }

  async getFilterId(event) {
    const { getProductsFromCategoryAndQuery } = api;
    const categoryId = event.target.value;
    const allProducts = await getProductsFromCategoryAndQuery(categoryId, '');
    this.setState({
      products: allProducts.results,
      categorysId: categoryId,
    });
  }

  getSearch(change) {
    this.setState({
      input: change,
    });
  }

  async doSearch() {
    const { getProductsFromCategoryAndQuery } = api;
    const { input, categorysId } = this.state;
    try {
      const allProducts = await getProductsFromCategoryAndQuery(categorysId, input);
      this.setState({
        products: allProducts.results,
      });
    } catch {
      return <p>Nenhum produto foi encontrado</p>;
    }
  }

  render() {
    const { products, categories } = this.state;
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
        <ShoppingCartLink />
        <SearchResult products={ products } />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <div className="categories">
          { categories.map((category) => (<Categories
            key={ category.id }
            name={ category.name }
            id={ category.id }
            getFilterId={ this.getFilterId }
          />)) }
        </div>
      </div>
    );
  }
}

export default Home;
