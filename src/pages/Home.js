import React from 'react';
import * as api from '../services/api';
import Products from './Products';
import CartButton from '../Components/CartButton';
import Category from '../Components/Categorias';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      productList: [],
      categories: [],
    };
    this.inputList = this.inputList.bind(this);
    this.categoryAndQuery = this.categoryAndQuery.bind(this);
    this.getCategory = this.getCategory.bind(this);
  }

  componentDidMount() {
    this.getCategory();
  }

  async getCategory() {
    const category = await api.getCategories();
    this.setState({ categories: category });
  }

  inputList({ target }) {
    this.setState({
      search: target.value,
    });
  }

  async categoryAndQuery(id = '') {
    const { search } = this.state;
    const { results } = await api.getProductsFromCategoryAndQuery(id, search);
    this.setState({ productList: results });
  }

  render() {
    const { productList, categories } = this.state;
    return (
      <form>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <input
          type="text"
          data-testid="query-input"
          onChange={ this.inputList }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.categoryAndQuery }
        >
          Clique Aqui
        </button>
        <Products productList={ productList } />
        <CartButton />
        <Category category={ categories } categoryAndQuery={ this.categoryAndQuery } />
      </form>
    );
  }
}

export default Home;
