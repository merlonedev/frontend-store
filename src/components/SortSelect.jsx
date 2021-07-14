import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import * as API from '../services/api';

export default class SortSelect extends Component {
  constructor() {
    super();
    this.state = {
      sorting: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    console.log(e.target);
    console.log(e.target.value);
    this.setState({ sorting: e.target.value });
  }

  handleClick() {
    const { callback } = this.props;
    const { sorting } = this.state;
    callback(sorting);
  }

  render() {
    return (
      <div>
        <label htmlFor="sort-select" data-testid="sort-select-label">
          Ordem dos produtos:
          <select
            name="sort-select"
            data-testid="sort-select"
            onChange={ this.handleChange }
            onClick={ this.handleClick }
          >
            <option value=""> </option>
            <option value="higher">Maior preço</option>
            <option value="lower">Menor preço</option>
          </select>
        </label>
      </div>
    );
  }
}

SortSelect.propTypes = {
  callback: PropTypes.func.isRequired,
};
