import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
import * as api from '../services/api';
import ProductCard from '../components/ProductCard';

class Main extends Component {
  constructor(props) {
    let totalItems = 0;
    if (localStorage.getItem('carrinho')) {
      const currentCart = JSON.parse(localStorage.getItem('carrinho'));
      totalItems = currentCart.reduce((acc, cur) => {
        acc += cur.quantity;
        return acc;
      }, 0);
    }

    super(props);
    this.state = {
      query: '',
      category: '',
      prodList: [],
      render: false,
      isEmpty: true,
      total: totalItems,
    };

    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.buttonLogic = this.buttonLogic.bind(this);
    this.updateTotal = this.updateTotal.bind(this);
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

  updateTotal(number) {
    this.setState({ total: number });
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
        (prod) => (
          <ProductCard
            key={ prod.id }
            product={ prod }
            updateTotal={ this.updateTotal }
          />),
      )
    );
  }

  render() {
    const { render, query, isEmpty, total } = this.state;

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
        <span data-testid="shopping-cart-size">{ total }</span>
        { isEmpty && this.renderParag() }
        <Categories onClick={ this.handleChangeCategory } />
        { render && this.renderList() }
      </main>
    );
  }
}

export default Main;
