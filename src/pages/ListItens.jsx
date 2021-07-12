import React from 'react';
import * as api from '../services/api';
import ProductCard from '../components/ProductCard';

class ListItens extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      products: [],
      checkList: true,
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.filterProducts = this.filterProducts.bind(this);
  }

  handleSearch(event) {
    const { name } = event.target;
    const value = event.target.type === 'checkbox'
      ? event.target.checked
      : event.target.value;
    this.setState({
      [name]: value,
    });
  }

  async filterProducts(event) {
    event.preventDefault();
    try {
      // const { match: { params: { id } } } = this.props;
      const { search } = this.state;
      const { results } = await api.getProductsFromCategoryAndQuery(1, search);
      console.log(results);
      if (results.length) {
        return this.setState({
          products: [...results],
          checkList: true,
        });
      }
      this.setState({
        checkList: false,
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { search, products, checkList } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="search-bar">
            <input
              id="search-bar"
              type="text"
              data-testid="query-input"
              value={ search }
              name="search"
              onChange={ this.handleSearch }
            />
            <button
              type="submit"
              data-testid="query-button"
              onClick={ this.filterProducts }
            >
              Pesquisar
            </button>
          </label>
        </form>
        <div data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </div>
        <div>
          {
            checkList
              ? products
                .map((product) => (
                  <ProductCard key={ product.id } product={ product } />
                ))
              : <span>Nenhum produto foi encontrado</span>
          }
        </div>
      </div>
    );
  }
}

export default ListItens;
