import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Quantities from './Quantities';

// import * as API from '../services/api';

export default class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      queryInput: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleClick() {
    const { callback } = this.props;
    const { queryInput } = this.state;
    callback(queryInput);
  }

  render() {
    const { quantity } = this.props;
    return (
      <div className="search-bar">
        <input
          type="text"
          data-testid="query-input"
          onChange={ this.handleChange }
          name="queryInput"
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleClick }
          className="button"
        >
          <p>Procurar</p>
        </button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <button type="button" className="button">
          <p>
            <Link to="/cart" data-testid="shopping-cart-button">
              Carrinho
              <Quantities quantity={ quantity } />
            </Link>
          </p>
        </button>
      </div>
    );
  }
}

SearchBar.propTypes = {
  callback: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
};
