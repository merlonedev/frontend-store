import React, { Component } from 'react';
import getProductsFromCategoryAndQuery from '../services/api';

class SearchAndList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {

  }

  handleSubmit(queryEvent) {
    
  }

  render() {
    return (
      <form>
        <label htmlFor="query">
          <input
            placeholder="O que tu queres procurar?"
            id="query"
            type="text"
            value={ title }
            onChange={ (event) => this.updateMovie('title', event.target.value) }
          />
        </label>
        <button
          type="button"
          onClick={ this.handleSubmit }
        >
          Procurar
        </button>
      </form>
    );
  }
}

export default SearchAndList;
