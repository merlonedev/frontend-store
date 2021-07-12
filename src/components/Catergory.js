import React, { Component } from 'react';
import { getCategories } from '../services/api';

class Category extends Component {
  constructor() {
    super();
    this.changeState = this.changeState.bind(this);
    this.state = {
      category: [],
    };
  }

  componentDidMount() {
    this.changeState();
  }

  changeState() {
    getCategories().then((item) => this.setState({
      category: [...item],
    }));
  }

  render() {
    const { category } = this.state;
    return (
      <div>
        <ul>
          {category.map((item) => (
            <li
              data-testid="category"
              key={ item.id }
            >
              { item.name }
            </li>))}
        </ul>

      </div>
    );
  }
}

export default Category;
