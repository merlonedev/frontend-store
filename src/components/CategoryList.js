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
    const categoriesAPI = await getCategories();
    this.setState({
      categories: categoriesAPI,
      loading: false,
    });
  }

  render() {
    const { categories, loading } = this.state;
    if (loading) {
      return (
        <p>Loading...</p>
      );
    }
    return (
      <div>
        <ul>
          { categories.map(
            (cat) => <li data-testid="category" key={ cat.id }>{ cat.name }</li>,
          )}
        </ul>
      </div>
    );
  }
}

export default CategoryList;
