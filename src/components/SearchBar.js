import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.handleChangle = this.handleChangle.bind(this);
    this.state = {
      value: '',
    };
  }

  handleChangle(event) {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    const { change } = this.props;
    const { value } = this.state;
    return (
      <div>
        <label data-testid="home-initial-message" htmlFor="search-bar">
          <input
            type="text"
            id="search-bar"
            onChange={ this.handleChangle }
            data-testid="query-input"
          />
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
        <button
          data-testid="query-button"
          onClick={ () => change(value) }
          type="button"
        >
          Pesquisar
        </button>
      </div>
    );
  }
}

SearchBar.propTypes = {
  change: PropTypes.func.isRequired,
};

export default SearchBar;
