import React, { Component } from 'react';
import * as api from '../services/api';

class FilterCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };

    this.getApi = this.getApi.bind(this);
  }

  componentDidMount() {
    this.getApi();
  }

  async getApi() {
    const response = await api.getCategories();
    this.setState({
      categories: response,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <aside>
        <ul>
          {
            categories.map((categorie) => (
              <li
                key={ categorie.id }
                data-testid="category"
              >
                { categorie.name }
              </li>
            ))
          }
        </ul>
      </aside>
    );
  }
}

export default FilterCategories;
