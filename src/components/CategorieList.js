import React, { Component } from 'react';
import * as api from '../services/api';

class CategorieList extends Component {
  constructor() {
    super();
    this.state = {
      categorias: [],
    };
  }

  componentDidMount() {
    api.getCategories()
      .then((item) => this.setState({ categorias: item }));
  }

  render() {
    const { categorias } = this.state;
    // i = item pq o lint é péssimo.
    return (
      <ul>
        {categorias.map((i) => <li data-testid="category" key={ i.name }>{i.name}</li>)}
      </ul>
    );
  }
}

export default CategorieList;
