import React from 'react';
import { getCategories } from '../services/api';

class CategoryList extends React.Component {
  constructor() {
    super();

    this.renderCategories = this.renderCategories.bind(this);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.renderCategories();
  }

  renderCategories() {
    getCategories()
      .then((response) => {
        this.setState({
          categories: response,
        });
      });
  }

  render() {
    const { categories } = this.state;
    return (
      <ul>
        { categories.map((item) => (
          <li data-testid="category" key={ item.id }>
            { item.name }
          </li>
        )) }
      </ul>
    );
  }
}

export default CategoryList;
