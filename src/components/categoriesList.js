import React from 'react';
import { getCategories } from '../services/api';

class Categories extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: {},
    };

    this.renderCategories = this.renderCategories.bind(this);
  }

  componentDidMount() {
    this.renderCategories();
  }

  async renderCategories() {
    const datas = await getCategories();
    const categoriesName = datas.map((data) => data.name);
    this.setState({ categories: categoriesName });
  }

  render() {
    const { categories } = this.state;
    console.log(categories);
    return (
      <p>teste</p>
    );
  }
}

export default Categories;
