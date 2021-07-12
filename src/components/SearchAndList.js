import React, { Component } from 'react';
import * as api from '../services/api';
import ProductCard from './ProductCard';

class SearchAndList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      queryText: '',
      productList: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderList = this.renderList.bind(this);
  }

  async handleSubmit() {
    const { queryText } = this.state;
    const { getProductsFromCategoryAndQuery } = api;
    const results = await getProductsFromCategoryAndQuery('', queryText);
    this.setState({
      loading: false,
      productList: results,
    });
  }

  renderForm() {
    return (
      <form>
        <label htmlFor="query">
          <input
            data-testid="query-input"
            placeholder="O que tu queres procurar?"
            id="query"
            type="text"
            onChange={ (event) => this.setState({ queryText: event.target.value }) }
          />
        </label>
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.handleSubmit }
        >
          Procurar
        </button>
      </form>
    );
  }

  renderList() {
    const { loading } = this.state;
    if (loading) return <p>Loading...</p>;
    const { productList: { results } } = this.state;
    return (
      <div>
        <ul>
          { results.map(
            (prod) => (<ProductCard
              key={ prod.id }
              product={ prod }
            />),
          )}
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderForm()}
        {this.renderList()}
      </div>
    );
  }
}

export default SearchAndList;
