import React, { Component } from 'react';
import ProductCard from './ProductCard';
import * as api from '../services/api';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      prodList: [],
      isEmpty: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.buttonLogic = this.buttonLogic.bind(this);
    this.renderParag = this.renderParag.bind(this);
    this.renderList = this.renderList.bind(this);
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({
      query: value,
    });
  }

  buttonLogic() {
    const { query } = this.state;
    if (query) {
      api.getProductsFromCategoryAndQuery(false, query)
        .then((res) => {
          const products = res.results;
          this.setState({
            prodList: [...products],
            isEmpty: false,
          });
        });
    }
  }

  renderParag() {
    return (
      <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    );
  }

  renderList() {
    const { prodList } = this.state;
    console.log(prodList);
    return (
      prodList.map(
        (prod) => <ProductCard key={ prod.id } product={ prod } />,
      )
    );
  }

  render() {
    const { query, isEmpty } = this.state;
    return (
      <section>
        <input
          data-testid="query-input"
          type="text"
          name="query"
          onChange={ this.handleChange }
          value={ query }
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.buttonLogic }
        >
          Pesquisar
        </button>
        {isEmpty ? this.renderParag() : this.renderList()}
      </section>
    );
  }
}

export default ProductList;
