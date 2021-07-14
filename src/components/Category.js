import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';

export default class Category extends Component {
  constructor() {
    super();
    this.handleState = this.handleState.bind(this);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.handleState();
  }

  handleState() {
    getCategories().then((category) => this.setState({
      categories: [...category],
    }));
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        {categories.map((category) => (
          <div key={ category.id }>
            <Link
              data-testid="category"
              key={ category.id }
              to={ `/categorias/${category.id}` }
              type="button"
              id={ category.id }
              className="btncategory"
            >
              { category.name }
            </Link>
          </div>))}
      </div>
    );
  }
}
