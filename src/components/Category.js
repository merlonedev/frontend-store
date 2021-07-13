import React, { Component } from 'react';
import { getCategories } from '../services/api';

export default class Category extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
    this.handleState = this.handleState.bind(this);
  }

  componentDidMount() {
    this.handleState();
  }

  handleState() {
    getCategories().then((category) => this.setState({
      categories: category,
    }));
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <ul>
          {categories.map((category) => (
            <li
              data-testid="category"
              key={ category.id }
            >
              { category.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
