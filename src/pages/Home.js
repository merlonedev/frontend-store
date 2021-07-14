import React from 'react';
import PropTypes from 'prop-types';
import List from '../Components/List';
import SearchResult from '../Components/SearchResult';
import Categories from '../Components/Categories';
import * as api from '../services/api';
import ShoppingCartLink from '../Components/ShoppingCartLink';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      products: [],
      categories: [],
    };

    this.getSearch = this.getSearch.bind(this);
    this.doSearch = this.doSearch.bind(this);
    this.handleJonas = this.handleJonas.bind(this);
    this.getProductsToAddInCart = this.getProductsToAddInCart.bind(this);
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

  getProductsToAddInCart(product) {
    const { addProductsInCart } = this.props;
    addProductsInCart(product);
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
        {/* {clickSearch && <SearchResult textToSearch={ search } />} */}
        <SearchResult
          products={ products }
          addToCart={ this.getProductsToAddInCart }
        />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <ShoppingCartLink />
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

Home.propTypes = {
  addProductsInCart: PropTypes.func.isRequired,
};

export default Home;
