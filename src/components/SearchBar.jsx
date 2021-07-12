import React, { Component } from 'react';
// import * as API from '../services/api';

export default class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      // products: [],
      queryInput: '',
      // category: '',
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
    // const { products } = this.state;
    return (
      <div>
        <input
          type="text"
          data-testid="query-input"
          onChange={ this.handleChange }
          name="queryInput"
        />
        <p
          data-testid="home-initial-message"
        >
          <button
            type="button"
            data-testid="query-button"
            onClick={ this.handleClick }
          >
            Procurar
          </button>
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

SearchBar.propTypes = {
  callback: PropTypes.func.isRequired,
};
