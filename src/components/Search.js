import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import CategoryList from './CategoryList';
import ProductCard from './ProductCard';
import ButtonToCart from './ButtonToCart';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: 'none',
      queryText: '',
      productList: [],
      categoryText: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderList = this.renderList.bind(this);
    this.handleCategoryText = this.handleCategoryText.bind(this);
  }

  async handleSubmit() {
    const { queryText, categoryText } = this.state;
    const { getProductsFromCategoryAndQuery } = api;
    const results = await getProductsFromCategoryAndQuery(categoryText, queryText);
    this.setState({
      loading: 'done',
      productList: results,
    });
  }

  handleCategoryText(event) {
    const { id } = event.target;
    this.setState({
      categoryText: id,
      queryText: '',
    }, () => this.handleSubmit());
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
    const { addItemToCart } = this.props;
    const { loading } = this.state;
    if (loading === 'loading') return <p>Loading...</p>;
    if (loading === 'none') return <div />;
    const { productList: { results } } = this.state;
    if (results.length === 0) return <p>Nenhum produto foi encontrado</p>;
    return (
      <div>
        <ul className="d-flex flex-row flex-wrap justify-content-evenly">
          { results.map(
            (prod) => (<ProductCard
              key={ prod.id }
              product={ prod }
              addItemToCart={ addItemToCart }
            />),
          )}
        </ul>
      </div>
    );
  }

  render() {
    const { cartList } = this.props;
    return (
      <div className="d-flex flex-row w-100">
        <div className="list-group category-list">
          <CategoryList handleCategoryText={ this.handleCategoryText } />
        </div>
        <div className="d-flex flex-column">
          <div className="d-flex flex-row w-100">
            <div data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </div>
            {this.renderForm()}
            <ButtonToCart cartList={ cartList } />
          </div>
          {this.renderList()}
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  addItemToCart: PropTypes.func.isRequired,
  cartList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Search;
