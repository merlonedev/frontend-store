import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductsCard';
import * as fetchApi from '../services/api';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      id: '',
      product: [],
    };

    this.handlerChange = this.handlerChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlerChange({ target }) {
    this.setState({
      search: target.value,
      id: target.value,
    });
  }

  handleSubmit() {
    const { search, id } = this.state;
    fetchApi.getProductsFromCategoryAndQuery(search, id)
      .then(({ results }) => (
        this.setState({
          product: results,
        })
      ));
  }

  render() {
    const { product } = this.state;
    const { cartAdd } = this.props;
    return (
      <div>
        <input
          type="text"
          placeholder="Buscar produto"
          data-testid="query-input"
          onChange={ this.handlerChange }
        />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <button
          name="button"
          data-testid="query-button"
          onClick={ this.handleSubmit }
          type="button"
        >
          Search
        </button>
        <ProductCard product={ product } cartAdd={ cartAdd } />
      </div>
    );
  }
}

SearchBar.propTypes = {
  cartAdd: PropTypes.func.isRequired,
};

export default SearchBar;
