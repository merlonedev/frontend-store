import React, { Component } from 'react';
import ProductCard from './ProductCard';
import * as api from '../services/api';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
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
      filter: value,
    });
  }

  buttonLogic() {
    const { filter } = this.state;
    if (filter) {
      api.getProductsFromCategoryAndQuery(false, filter)
        .then((res) => {
          this.setState({
            prodList: [...res],
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
        (prod) => <ProductCard key={ prod.id } product={ prod } data-testid="products" />,
      )
    );
  }

  render() {
    const { filter, isEmpty } = this.state;
    return (
      <section>
        <input
          data-testid="query-input"
          type="text"
          name="filter"
          onChange={ this.handleChange }
          value={ filter }
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
