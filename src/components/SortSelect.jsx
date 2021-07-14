import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import * as API from '../services/api';

export default class SortSelect extends Component {
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
    return (
      <div>
        <label htmlFor="sort-select" data-testid="sort-select-label">
          Ordem dos produtos:
          <select name="sort-select" data-testid="sort-select">
            <option value=""> </option>
            <option value="sort-higher">Maior preço</option>
            <option value="sort-lower">Menor preço</option>
          </select>
        </label>
      </div>
    );
  }
}

SortSelect.propTypes = {
  callback: PropTypes.func.isRequired,
};
