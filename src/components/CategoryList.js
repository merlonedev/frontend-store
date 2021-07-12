import React from 'react';
import * as api from '../services/api';

class CategoryList extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchAPI();
  }

  async fetchAPI() {
    const { getCategories } = api;
    await getCategories()
      .then((res) => {
        console.log(res);
        this.setState({
          categories: res,
          loading: false,
        });
      });
  }

  render() {
    const { categories, loading } = this.state;
    console.log(categories);
    if (loading) {
      return (
        <p>Loading...</p>
      );
    }
    return (
      <div>
        <ul>
          { categories.map((category) => <li data-testid="category" key={ category.id }>{ category.name }</li>) }
        </ul>
      </div>
    );
  }
}

export default CategoryList;
