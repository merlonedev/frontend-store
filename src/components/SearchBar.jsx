import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import Quantities from './Quantities';
import ShoppingCartButton from './subcomponents/ShoppingCartButton';

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
          className="search-input"
          placeholder="Busque e nos viramos nos 30..."
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleClick }
          className="button search-button"
        >
          <i className="fas fa-search" />
        </button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        {/* <button type="button" className="button cart-button">
          <Link to="/cart" data-testid="shopping-cart-button">
            <p>
              <i className="fas fa-shopping-cart" />
              <Quantities quantity={ quantity } />
            </p>
          </Link>
        </button> */}
        <ShoppingCartButton quantity={ quantity } />
      </div>
    );
  }
}

SearchBar.propTypes = {
  callback: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
};
