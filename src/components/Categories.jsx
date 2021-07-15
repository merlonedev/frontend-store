import React, { Component } from 'react';
import * as Api from '../services/api';

class Categories extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    Api.getCategories().then((response) => this.setState({
      categories: response,
    }));
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        {categories}
      </div>
    );
  }
}

export default Categories;
