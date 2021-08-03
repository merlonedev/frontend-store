import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick({ target }) {
    const { name } = target;
    const { getState } = this.props;
    const { search } = this.state;

    getState(name, search);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { search } = this.state;
    return (
      <div>
        <input
          name="search"
          value={ search }
          type="text"
          data-testid="query-input"
          onChange={ this.handleChange }
        />
        <Link to="/search">
          <button
            name="search"
            type="button"
            data-testid="query-button"
            onClick={ this.handleClick }
          >
            Search
          </button>
        </Link>
      </div>
    );
  }
}

SearchBar.propTypes = {
  getState: PropTypes.func.isRequired,
};

export default SearchBar;
