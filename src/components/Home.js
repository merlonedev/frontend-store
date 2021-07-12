import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as fetchApi from '../services/api';
import SearchBar from './SearchBar';

class Home extends Component {
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
    return (
      <div>
        <input
          type="text"
          data-testid="query-input"
          placeholder="Buscar produto"
          onChange={ this.handlerChange }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleSubmit }
        >
          Clique Aqui
        </button>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <SearchBar product={ product } />
        <header>
          <Link to="/ShoppingCart" data-testid="shopping-cart-button">
            Carrinho
          </Link>
          <SearchBar />
        </header>
      </div>
    );
  }
}

export default Home;
