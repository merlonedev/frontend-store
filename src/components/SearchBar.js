import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { value } = e.target;
    this.setState({
      searchText: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { getProductListByQueryCallBack } = this.props;
    const { searchText } = this.state;
    getProductListByQueryCallBack(searchText);
  }

  render() {
    const { searchText } = this.state;
    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor="search-text" data-testid="home-initial-message">
          <input
            type="text"
            name="searchText"
            value={ searchText }
            onChange={ this.handleChange }
            data-testid="query-input"
          />
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
        <input type="submit" value="Submit" data-testid="query-button" />
      </form>
    );
  }
}

SearchBar.propTypes = {
  getProductListByQueryCallBack: PropTypes.func.isRequired,
};

export default SearchBar;
