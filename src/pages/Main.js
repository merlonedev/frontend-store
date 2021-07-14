import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
import * as api from '../services/api';
import ProductCard from '../components/ProductCard';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      category: '',
      prodList: [],
      render: false,
      isEmpty: true,
    };

    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.buttonLogic = this.buttonLogic.bind(this);
  }

  handleChangeCategory({ target }) {
    const { value } = target;
    this.setState({
      category: value,
    }, () => {
      const { category } = this.state;

      if (category) {
        api.getProductsFromCategoryAndQuery(category, false)
          .then((res) => {
            const products = res.results;
            this.setState({
              prodList: [...products],
            }, () => this.setState({
              render: true,
            }));
          });
      }
    });
  }

  handleChangeInput({ target }) {
    const { value } = target;
    this.setState({
      query: value,
      prodList: [],
    });
  }

  buttonLogic() {
    const { query, category } = this.state;
    if (query) {
      api.getProductsFromCategoryAndQuery(category, query)
        .then((res) => {
          const products = res.results;
          this.setState({
            prodList: [...products],
            isEmpty: false,
            render: true,
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
    return (
      prodList.map(
        (prod) => <ProductCard key={ prod.id } product={ prod } />,
      )
    );
  }

  render() {
    const { render, query, isEmpty } = this.state;

    return (
      <main>
        <input
          data-testid="query-input"
          type="text"
          name="query"
          onChange={ this.handleChangeInput }
          value={ query }
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.buttonLogic }
        >
          Pesquisar
        </button>
        <Link data-testid="shopping-cart-button" to="/shopping-cart">
          Retorna
        </Link>
        { isEmpty && this.renderParag() }
        <Categories onClick={ this.handleChangeCategory } />
        { render && this.renderList() }
      </main>
    );
  }
}

export default Main;
