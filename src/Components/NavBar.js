import React, { Component } from 'react';
import { getCategories } from '../services/api';

class NavBar extends Component {
  constructor() {
    super();

    this.mountListCategory = this.mountListCategory.bind(this);

    this.state = {
      categoryList: [],
    };
  }

  componentDidMount() {
    this.mountListCategory();
  }

  async mountListCategory() {
    const response = await getCategories();
    this.setState({
      categoryList: response,
    });
  }

  render() {
    const { categoryList } = this.state;
    return (
      <nav>
        <ul>
          {categoryList.map((category) => (
            <li key={ category.id } data-testid="category">
              { category.name }
            </li>))}
        </ul>
      </nav>
    );
  }
}

export default NavBar;
